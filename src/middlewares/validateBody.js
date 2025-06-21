// import createHttpError from 'http-errors';

// export const validateBody = (schema) => {
//   return (req, res, next) => {
//     const { error } = schema.validate(req.body, { abortEarly: false });
//     if (error) {
//       return next(createHttpError(400, error.message));
//     }
//     next();
//   };
// };

export function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.error(err);
  res.status(status).json({
    status,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
}
