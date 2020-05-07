import React, { Suspense } from "react";
import * as Components from "./views";
function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Components.Main />
      </Suspense>
    </>
  );
}

export default App;
