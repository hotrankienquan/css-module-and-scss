//  khi import 1 file css như này thì webpack sẽ hiểu là css internal
// development :npm start -> css internal
// production : npm run build / yarn build -> css external

import Button from "./components/Button";
import GlobalStyles from "./components/GlobalStyles";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import "./styles.css";

export default function App() {
  return (
    <GlobalStyles>
      <div className="App">
        <h1 className="heading">Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Heading />
        <Paragraph />
      </div>
      <div>
        <Button primary />
        <Button disabled />
      </div>
    </GlobalStyles>
  );
}
