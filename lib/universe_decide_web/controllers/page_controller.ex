defmodule UniverseDecideWeb.PageController do
  use UniverseDecideWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
