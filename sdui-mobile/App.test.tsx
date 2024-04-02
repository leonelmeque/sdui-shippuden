import { render } from "@testing-library/react-native";
import App from "./App";

test("testing main application", () => {
  const container = render(<App />);
  expect(container).toBeTruthy();
});
