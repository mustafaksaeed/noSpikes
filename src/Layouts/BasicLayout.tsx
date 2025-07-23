import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <div>
      <div>
        <header>
          <h1>My App</h1>
          <nav>
            <ul>
              <li>
                <a href="/"></a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BasicLayout;
