enum Environments {
  DEVELOP = "develop",
  LOCAL_REACT = "local-react",
  LOCAL_EXPRESS = "local-express",
  PROD = "prod"
}

export interface LocationUrl {
  hostname: string;
  origin: string;
  port: string;
}

export interface EnvValues {
  baseUrl: string;
  environment: Environments
};

export const getEnvironment = (url: LocationUrl): EnvValues => {
  const { hostname, origin, port } = url;

  const envValues: EnvValues = {
    baseUrl: `${origin}`,
    environment: Environments.PROD
  }

  if (hostname === "localhost" && port === "3000") {
    envValues.baseUrl = "http://localhost:8080";
    envValues.environment = Environments.LOCAL_REACT;
  }
  if (hostname === "localhost" && port === "8080") {
    envValues.environment = Environments.LOCAL_EXPRESS;
  }
  if (hostname.indexOf("staging") > -1 || hostname.indexOf("develop") > -1) {
    envValues.environment = Environments.DEVELOP; // [1]
  }
  return envValues;
};

/*
NOTES
  [1] This assumes you have deployed a development environment named
      either "staging" or "develop". Update accordingly.

*/
