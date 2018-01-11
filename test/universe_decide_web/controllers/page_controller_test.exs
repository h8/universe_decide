defmodule UniverseDecideWeb.PageControllerTest do
  use UniverseDecideWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "app.js"
  end
end
