

export default function Login() {
  const handleLogin = async () => {
    // use fetch to make a POST request to /api/auth/login
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "user@email.com", password: "password"}),
    });

    // save the response as json
    const json = await response.json();

    // check if the response is ok
    if (!response.ok) {
      // if not, throw an error
      throw new Error(json.message);
    }

    // if yes, save the token to local storage
    localStorage.setItem("token", json.token);
    
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" />
        <input placeholder="Password" />

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}