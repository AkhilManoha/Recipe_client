import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "linear-gradient(90deg, #ff6f61, #de4d4d)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{}}>
        <Link
          to="/"
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "1px",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#ffebeb")}
          onMouseOut={(e) => (e.target.style.color = "#fff")}
        >
          RecipeSpot
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: 500,
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) =>
            Object.assign(e.target.style, {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              transform: "translateY(-2px)",
            })
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, {
              backgroundColor: "transparent",
              transform: "translateY(0)",
            })
          }
        >
          Home
        </Link>
        <Link
          to="/create-recipe"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: 500,
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) =>
            Object.assign(e.target.style, {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              transform: "translateY(-2px)",
            })
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, {
              backgroundColor: "transparent",
              transform: "translateY(0)",
            })
          }
        >
          Create Recipe
        </Link>
        <Link
          to="/saved-recipes"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: 500,
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) =>
            Object.assign(e.target.style, {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              transform: "translateY(-2px)",
            })
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, {
              backgroundColor: "transparent",
              transform: "translateY(0)",
            })
          }
        >
          Saved Recipes
        </Link>
        {!cookies.access_token ? (
          <Link
            to="/auth"
            style={{
              backgroundColor: "#fff",
              color: "#ff6f61",
              padding: "0.5rem 1.5rem",
              borderRadius: "20px",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              Object.assign(e.target.style, {
                backgroundColor: "#ffebeb",
                color: "#de4d4d",
              })
            }
            onMouseOut={(e) =>
              Object.assign(e.target.style, {
                backgroundColor: "#fff",
                color: "#ff6f61",
              })
            }
          >
            Login/Register
          </Link>
        ) : (
          <button
            onClick={logout}
            style={{
              backgroundColor: "#fff",
              color: "#ff6f61",
              border: "none",
              padding: "0.5rem 1.5rem",
              borderRadius: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              Object.assign(e.target.style, {
                backgroundColor: "#ffebeb",
                color: "#de4d4d",
                transform: "translateY(-2px)",
              })
            }
            onMouseOut={(e) =>
              Object.assign(e.target.style, {
                backgroundColor: "#fff",
                color: "#ff6f61",
                transform: "translateY(0)",
              })
            }
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};
