// check env variables and throw error if not set
export function checkEnvVariables() {
  const requiredEnvVars = [
    'PORT',
    'NODE_ENV',
    'VERSION',
  ];

  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

  if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
  }
}
