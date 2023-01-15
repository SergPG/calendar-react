import React from "react";

import Input from "components/Input";
import Button from "components/Button";

const Form = ({ type = "create", title, setTitle, loading, handleSubmit }) => {
  return (
    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
      <main className="w-full flex-grow p-6">
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <Input
        label="Title"
        placeholder="Todo Title (Max 50 Characters Allowed)"
        value={title}
        onChange={e => setTitle(e.target.value.slice(0, 50))}
      />
      <Button
        type="submit"
        buttonText={type === "create" ? "Create Event" : "Update Event"}
        loading={loading}
      />
    </form>
      </main>
    </div>
  );
};

export default Form;