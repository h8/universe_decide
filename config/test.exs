use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :universe_decide, UniverseDecideWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :universe_decide, UniverseDecide.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "universe_decide",
  password: "",
  database: "universe_decide_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
