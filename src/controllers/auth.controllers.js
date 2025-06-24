import createHttpError from 'http-errors';
import { registerUserService, loginUserService, refreshSessionService, logoutUserService } from '../services/auth.service.js';

export const registerController = async (req, res, next) => {
  try {
    const user = await registerUserService(req.body);
    res.status(201).json({
      status: 201,
      message: 'Successfully registered a user!',
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { accessToken, refreshToken, sessionId } = await loginUserService(email, password);

    res
      .cookie('refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: 'strict',
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .cookie('sessionId', sessionId, {
        httpOnly: true,
        sameSite: 'strict',
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .status(200)
      .json({
        status: 200,
        message: 'Successfully logged in an user!',
        data: { accessToken },
      });
  } catch (err) {
    next(err);
  }
};

export const refreshSessionController = async (req, res, next) => {
  try {
    const { refreshToken, sessionId } = req.cookies;
    if (!sessionId) throw createHttpError(401, 'Session ID missing');

    const { accessToken, newRefreshToken } = await refreshSessionService(sessionId, refreshToken);

    res
      .cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        sameSite: 'strict',
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .cookie('sessionId', sessionId, {
        httpOnly: true,
        sameSite: 'strict',
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .status(200)
      .json({
        status: 200,
        message: 'Successfully refreshed a session!',
        data: { accessToken },
      });
  } catch (err) {
    next(err);
  }
};

export const logoutUserController = async (req, res, next) => {
  try {
    const { sessionId } = req.cookies;
    if (!sessionId) throw createHttpError(401, 'Session ID missing');

    await logoutUserService(sessionId);

    res.clearCookie('refreshToken').clearCookie('sessionId').sendStatus(204);
  } catch (err) {
    next(err);
  }
};
