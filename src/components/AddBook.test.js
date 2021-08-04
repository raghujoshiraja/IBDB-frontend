// import * as React from "react";
// import { render, fireEvent } from "@testing-library/react";

// import AddBook from "./AddBook";

// test("Add a new Book", async () => {
//   const { getByText, getByPlaceholderText } = render(<AddBook />);

//   // Check if all elements exist
//   const title = getByPlaceholderText(/title/i);            // Title
//   const authorId = getByPlaceholderText(/name/i);          // Author Id Dropwdow
//   const description = getByPlaceholderText("description"); // Description
//   const pageCount = getByPlaceholderText("pageCount");     // Page Count
//   const button = getByText(/Add/i);                        // Add Button

//   // Enter in the test values and click the add button
//   fireEvent.change(title, { target: { value: "TestTitle" } });
//   fireEvent.change(authorId, { target: { value: "Test name" } });
//   fireEvent.change(description, { target: { value: "Test description" } });
//   fireEvent.change(pageCount, { target: { value: 200 } });
//   fireEvent.click(button); // Click the add button

//   getByText(/Added/i); // Wait for popup notification
// });

import * as React from "react";
import { render } from "@testing-library/react";

import InfoWidget from "./InfoWidget";
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
