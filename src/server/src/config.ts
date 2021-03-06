export const config = () => ({
  port: Number(process.env.PORT),
  jwSecret: process.env.SECRET,
  database: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}', __dirname + '/entities/**/*.js'],
    synchronize: true,
  },
});
