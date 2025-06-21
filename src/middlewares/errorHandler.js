// export function errorHandler(err, req, res, next) {
//     const { status = 500, message = 'Internal Server Error' } = err;
//     res.status(status).json({
//       status,
//       message,
//     });
//   }
  
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