import * as React from "react";
import { render } from "@testing-library/react";

import InfoWidget from "./AuthorInfoWidget";
import { BrowserRouter as Router } from "react-router-dom";

const sampleData = {};

test("InfoWidget is rendered properly", () => {
  const { getByText, getByRole } = render(
    <Router>
      <InfoWidget currentData={sampleData} mode="book" />
    </Router>
  );

  // Title Text
  const title = getByRole("title");
  expect(title).toBeTruthy(); // Title exists

  // Subtext
  getByText(/By/); // Subtext exists

  // "More books by the author" text
  getByText(/More books/i); // Subtext exists

  // Get <HR> tags
  getByRole("hr");
});
