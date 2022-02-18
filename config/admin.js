module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2bfd55815a53e39be8ffb232e2005304'),
  },
});
