function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" />
        </p>
        <p>
          <label>Expected Result</label>
          <input type="number" />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
