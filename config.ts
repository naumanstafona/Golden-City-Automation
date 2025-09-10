const environmentvariable = "local"
const ENVIRONMENT: "local" | "dev" = environmentvariable;

interface Config {
  url: string;
  email: string;
  password: string;
}

const devConfig: Config = {
  url: "http://localhost:3000/",
  email: "",
  password: "",
};
const prodConfig: Config = {
  url: "http://localhost:3000/",
  email: "",
  password: "",
};

const config: Config = ENVIRONMENT === environmentvariable ? prodConfig : devConfig;

export default config;