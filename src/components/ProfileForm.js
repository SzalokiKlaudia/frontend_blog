import useAuthContext from "../context/AuthContext";

function ProfileForm() {
  const { user } = useAuthContext();

  return (
    <form className="pt-5 login-reg-form">
      <div className="mb-3">
        <label htmlFor="name" className="form-label"></label>
        <input
          type="text"
          className="form-control log-input"
          value={user.name}
          id="name"
          disabled
          placeholder="name"
          name="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label"></label>
        <input
          type="email"
          className="form-control log-input"
          value={user.email}
          id="email"
          disabled
          placeholder="email"
          name="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="crt" className="form-label"></label>
        <input
          type="text"
          value={new Date(user.created_at).toLocaleDateString("hu-HU")}
          className="form-control log-input"
          id="crt"
          disabled
          placeholder="created:"
          name="created"
        />
      </div>
    </form>
  );
}

export default ProfileForm;
