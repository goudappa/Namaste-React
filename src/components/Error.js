import { useRouteError } from "react-router";

function Error() {
  const errors = useRouteError();
  console.log(errors);
  return (
    <div>
      <h1>This is Error Page</h1>
      {errors.status}: {errors.statusText}
    </div>
  );
}

export default Error;
