window.ITS_DA_QUESTIONS = [
  {
    "number": 1,
    "type": "multichoice",
    "question": "A domestic flight company wants to forecast flight delays and cancellations to provide the best experience to their customers.<br/><br/>Which three approaches would a data scientist use for this task? (Choose 3.)",
    "options": {
      "A": "Using structured data",
      "B": "Building predictive analysis models using machine learning",
      "C": "Using unstructured data",
      "D": "Using only current local weather",
      "E": "Proposing when a flight might be delayed without using data mining"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Forecasting flight delays and cancellations effectively requires training predictive machine learning models on both structured data (flight logs, historical flight times, aircraft maintenance logs, airport gate assignments) and unstructured data (weather reports, passenger feedback, radar/sensor text feeds). Relying only on current local weather ignores wider route conditions, and guessing without data mining is unscientific."
  },
  {
    "number": 2,
    "type": "match",
    "question": "Match each type of data organization structure with its description.",
    "pairs": [
      {
        "left": "Row",
        "right": "A unique record with at least one data point"
      },
      {
        "left": "Spreadsheet",
        "right": "A collection of data stored in cells"
      },
      {
        "left": "Database",
        "right": "A collection of related data, appropriate for handling large amounts of data"
      },
      {
        "left": "Tuple",
        "right": "An ordered collection of data that cannot be modified"
      }
    ],
    "explanation": "In relational systems, a row represents a single unique record containing one or more attributes. A spreadsheet organizes data into a 2D grid of rows and columns (cells). A database is a structured system designed to manage and query large volumes of related data. In computer science and Python, a tuple is an immutable (unmodifiable), ordered sequence of elements."
  },
  {
    "number": 3,
    "type": "mcq",
    "question": "What concept allows analysts to drill down into data and examine different levels of information that may be crucial in diagnostic analytics?",
    "options": {
      "A": "Transparency",
      "B": "Interpretability",
      "C": "Granularity",
      "D": "Completeness"
    },
    "answer": "C",
    "explanation": "Granularity refers to the level of detail or depth represented in the data (e.g., yearly -> monthly -> daily -> hourly). High granularity enables analysts to drill down from high-level summaries into specific records to identify root causes during diagnostic analytics."
  },
  {
    "number": 4,
    "type": "multichoice",
    "question": "A coworker is having trouble joining two database tables, TableA and TableB, that were imported from CSV files. They say the tables have no common values.<br/><br/>You need to troubleshoot the problem. You look at the data in the original CSV files and find that the RowKey values in the TableA file and the RowID values in the TableB file look identical. Both have three numbers followed by a dash (-) and two letters.<br/><br/>Which two actions should you complete next? (Choose 2)",
    "options": {
      "A": "Verify that the data in the database was imported as a numeric data type.",
      "B": "Trim empty spaces from both sides of the valid characters.",
      "C": "Trim empty spaces from only the right side of the valid characters.",
      "D": "Visually compare the database values to the CSV values."
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "When join keys that appear identical fail to match, common causes are hidden whitespace (leading or trailing spaces) or discrepancies introduced during import. Trimming whitespace from both sides of the keys cleans the strings, and visually comparing the imported database values against the raw CSV files reveals import artifacts. Because the keys contain hyphens and letters, verifying numeric data type is incorrect."
  },
  {
    "number": 5,
    "type": "classify",
    "question": "The data table below depicts housing prices in a region from 2016 to 2025:<br/><br/><table style='width:100%;max-width:320px;margin:12px auto;border-collapse:collapse;border:1px solid #cbd5e1;font-size:0.9rem;text-align:center;'><tr style='background:#f1f5f9;font-weight:700;'><th style='padding:6px;border:1px solid #cbd5e1;'>Year</th><th style='padding:6px;border:1px solid #cbd5e1;'>Price</th></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>2016</td><td style='padding:4px;border:1px solid #cbd5e1;'>$150,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>2017</td><td style='padding:4px;border:1px solid #cbd5e1;'>$175,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>2018</td><td style='padding:4px;border:1px solid #cbd5e1;'>$200,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>2019</td><td style='padding:4px;border:1px solid #cbd5e1;'>$225,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>2020</td><td style='padding:4px;border:1px solid #cbd5e1;'>$250,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>2021</td><td style='padding:4px;border:1px solid #cbd5e1;'>$275,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>2022</td><td style='padding:4px;border:1px solid #cbd5e1;'>$300,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>2023</td><td style='padding:4px;border:1px solid #cbd5e1;'>$325,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>2024</td><td style='padding:4px;border:1px solid #cbd5e1;'>$350,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>2025</td><td style='padding:4px;border:1px solid #cbd5e1;'>$425,000</td></tr></table><br/>For each statement about the data and visualization, select True or False.",
    "categories": [
      "True",
      "False"
    ],
    "items": [
      {
        "text": "The scaling of the graph is misleading.",
        "category": "True"
      },
      {
        "text": "An increase of $25,000 occurs each year from 2016 to 2025.",
        "category": "False"
      },
      {
        "text": "The visualization accurately depicts the housing prices shown in the table.",
        "category": "True"
      }
    ],
    "explanation": "Prices increased steadily by $25,000 each year from 2016 ($150,000) to 2024 ($350,000), but between 2024 and 2025, price jumped by $75,000 to $425,000. Therefore, an increase of $25,000 did NOT occur each year from 2016 to 2025 (False). The visualization accurately plots the data points from the table (True), but a linear-appearing bar step scale can mislead viewers about steady annual growth (True)."
  },
  {
    "number": 6,
    "type": "mcq",
    "question": "You believe playing video games increases a person's chance of having a heart attack. In your research, you notice equal evidence in favor of this hypothesis and opposed to it. You spend hours trying to identify the problems with the evidence opposed to your hypothesis, but readily accept the evidence in favor.<br/><br/>Which type of bias are you demonstrating?",
    "options": {
      "A": "Affinity bias",
      "B": "Sampling bias",
      "C": "Motivated reasoning",
      "D": "Anchoring bias"
    },
    "answer": "C",
    "explanation": "Motivated reasoning is a cognitive bias in which individuals apply severe skepticism and scrutinize opposing evidence to find flaws while unquestioningly accepting evidence that supports their desired conclusion."
  },
  {
    "number": 7,
    "type": "mcq",
    "question": "What is an example of data cleaning?",
    "options": {
      "A": "Adding quotation marks to the beginning and end of a tab-delimited file",
      "B": "Arranging Excel data rows in an order that is easy for a user to read",
      "C": "Removing non-printable characters from a comma-delimited file",
      "D": "Ensuring that the data in a Word table uses a consistent font"
    },
    "answer": "C",
    "explanation": "Data cleaning is the process of detecting and correcting or removing corrupt, inaccurate, incomplete, or incorrectly formatted records from a dataset. Removing hidden non-printable or corrupt control characters is a fundamental data cleaning operation."
  },
  {
    "number": 8,
    "type": "mcq",
    "question": "A file named <code>Courses.data</code> contains the following content:<br/><pre style='background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;margin:10px 0;'>Title|Number|Hours\nAlgebra|MT101|3\nHistory|HS201|3\nPhysics|PS302|4\nMusic|MS101|2\nArt|AR201|2</pre>You need to use Python to read the data from the file so that you can import it into a database table.<br/><br/>Which code completion matches the required Python code?<br/><pre style='background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;margin:10px 0;'>import [Dropdown 1]\nwith open('Courses.data', 'r') as file:\n    reader = csv.reader(file, [Dropdown 2] = '|')\n    for row in reader:\n        # import the data into the table</pre>",
    "options": {
      "A": "Dropdown 1: csv ; Dropdown 2: delimiter",
      "B": "Dropdown 1: json ; Dropdown 2: column",
      "C": "Dropdown 1: sql ; Dropdown 2: delimiter",
      "D": "Dropdown 1: xml ; Dropdown 2: row"
    },
    "answer": "A",
    "explanation": "Python's standard library provides the <code>csv</code> module. When reading a delimited file, <code>csv.reader()</code> accepts a <code>delimiter</code> parameter to specify the separation character (in this case pipe <code>'|'</code>)."
  },
  {
    "number": 9,
    "type": "mcq",
    "question": "Analyze the scenario:<br/><br/>A colleague shows you a 3D bar chart indicating that Group A performed significantly better than Group B on a recent assignment. The vertical axis runs from 8.4 to 10.0 in increments of 0.2. Group A has a bar reaching approximately 9.9 while Group B reaches approximately 8.9.<br/><br/>The chart creates a false impression of a dramatic score difference.<br/><br/>Which chart element causes the false impression?",
    "options": {
      "A": "The x-axis units of measurement",
      "B": "The y-axis units of measurement",
      "C": "The z-axis units of measurement",
      "D": "The color differentiation"
    },
    "answer": "B",
    "explanation": "Truncating the y-axis (starting at 8.4 instead of 0) exaggerates small numerical differences between 8.9 and 9.9, making Group A appear more than double Group B's performance visually."
  },
  {
    "number": 10,
    "type": "mcq",
    "question": "You are analyzing sales activity to determine which products are purchased more frequently on national holidays.<br/><br/>Which level of data granularity will enable you to perform the most precise analysis?",
    "options": {
      "A": "Years",
      "B": "Months",
      "C": "Weeks",
      "D": "Days"
    },
    "answer": "D",
    "explanation": "National holidays are celebrated on specific calendar days. Aggregating by years, months, or weeks blurs holiday dates with surrounding non-holiday dates, whereas 'Days' granularity isolates the exact holiday dates."
  },
  {
    "number": 11,
    "type": "mcq",
    "question": "You have a dataset that includes product review scores and demographic information about the reviewers (Product, Review Score, Reviewer ID, Industry, Ethnicity).<br/><br/>You create a report showing the average review score for each product (e.g. AX-150: 77, BK-330: 62). The product manager asks you to <strong>disaggregate</strong> the data in the report.<br/><br/>Which action would be disaggregation?",
    "options": {
      "A": "Display the overall average and mode of all scores and a count of all reviews.",
      "B": "Display a list of industries that are included in the Other option.",
      "C": "Display the overall average and mode of all scores on a per-product basis.",
      "D": "Display average and mode of the scores for each product grouped by the ethnicity of the reviewers."
    },
    "answer": "D",
    "explanation": "Disaggregation is the division of aggregated data into detailed sub-categories or subgroups (e.g., breaking product review scores down by reviewer demographics like ethnicity)."
  },
  {
    "number": 12,
    "type": "match",
    "question": "You are a data analyst for a healthcare provider. You are designing a solution that must meet these requirements:<br/>• Medical records must not be readable by unauthorized staff.<br/>• Patient names must be converted to cartoon character names.<br/>• However, doctors must be able to associate the cartoon names to the actual patient when providing health care.<br/>• Statisticians must be able to access healthcare visits but only be able to refer to patients as their cartoon character names.<br/><br/>Match each requirement/role with the appropriate data protection technique:",
    "pairs": [
      {
        "left": "Pseudonymization",
        "right": "You should use for the doctors."
      },
      {
        "left": "Anonymization",
        "right": "You should use for the statisticians."
      },
      {
        "left": "Encryption",
        "right": "You should use for the medical records."
      }
    ],
    "explanation": "Pseudonymization replaces identifiers with artificial keys (pseudonyms) that can be reversed using a secure key (allowing doctors to connect patient records back to actual identities). Anonymization irreversibly removes identifying linkages so statisticians cannot identify individuals. Encryption protects stored records from being read by unauthorized personnel."
  },
  {
    "number": 13,
    "type": "mcq",
    "question": "What is metadata?",
    "options": {
      "A": "Numerical facts",
      "B": "A context that gives data meaning",
      "C": "The text content of a message",
      "D": "Statistics"
    },
    "answer": "B",
    "explanation": "Metadata is 'data about data.' It provides context, descriptions, provenance, data types, timestamps, and structure that give raw data meaning and utility."
  },
  {
    "number": 14,
    "type": "multichoice",
    "question": "Each month, you need to automatically transform the data from two XML documents into a single flat file with columns and rows that Excel can open and interpret. The document names and structure remain constant. You know the relationships between the two XML documents.<br/><br/>Which two resources can you use? (Choose 2.)",
    "options": {
      "A": "JSON",
      "B": "Power Query for Excel (M)",
      "C": "Python",
      "D": "Microsoft Word"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Power Query (using the M language) natively ingests, parses, merges, and flattens XML files into Excel tables. Python (using libraries like xml.etree, pandas, or lxml) provides automated scripting to parse XML and export flat CSV or Excel files. JSON is a data format (not a transformation tool), and Word is a word processor."
  },
  {
    "number": 15,
    "type": "match",
    "question": "You are performing descriptive analytics on quarterly sales data:<br/><br/><table style='width:100%;max-width:480px;margin:12px auto;border-collapse:collapse;border:1px solid #cbd5e1;font-size:0.85rem;text-align:center;'><tr style='background:#f1f5f9;font-weight:700;'><th style='padding:6px;border:1px solid #cbd5e1;'>Region</th><th style='padding:6px;border:1px solid #cbd5e1;'>Q1</th><th style='padding:6px;border:1px solid #cbd5e1;'>Q2</th><th style='padding:6px;border:1px solid #cbd5e1;'>Q3</th><th style='padding:6px;border:1px solid #cbd5e1;'>Q4</th></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>North</td><td>25,000</td><td>30,000</td><td>40,000</td><td>50,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>South</td><td>35,000</td><td>45,000</td><td>40,000</td><td>55,000</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>East</td><td>35,000</td><td>32,500</td><td>41,000</td><td>52,500</td></tr><tr><td style='padding:4px;border:1px solid #cbd5e1;'>West</td><td>34,500</td><td>30,000</td><td>42,500</td><td>55,000</td></tr></table><br/>Match each calculated summary row with its correct statistical metric:",
    "pairs": [
      {
        "left": "Sum",
        "right": "Row: [129,500 | 137,500 | 163,500 | 212,500]"
      },
      {
        "left": "Max",
        "right": "Row: [35,000 | 45,000 | 42,500 | 55,000]"
      },
      {
        "left": "Min",
        "right": "Row: [25,000 | 30,000 | 40,000 | 50,000]"
      },
      {
        "left": "Median",
        "right": "Row: [35,000 | 30,000 | 40,000 | 55,000]"
      }
    ],
    "explanation": "Row 1 sums all 4 regions for each quarter (25k+35k+35k+34.5k = 129.5k). Row 2 finds the maximum value across regions for each quarter. Row 3 finds the minimum value. Row 4 represents the median."
  },
  {
    "number": 16,
    "type": "match",
    "question": "You are analyzing customer satisfaction scores between on-line purchases and in-store purchases on a scale from 1 (extremely unsatisfied) to 10 (extremely satisfied).<br/><br/>Match each descriptive statement to the correct statistical metric:",
    "pairs": [
      {
        "left": "Mode",
        "right": "The most frequent satisfaction score was 5 for online customers and 9 for in-store customers."
      },
      {
        "left": "Mean",
        "right": "The average score for online customers was 6.4 and the average score for in-store customers was 7.0."
      },
      {
        "left": "Median",
        "right": "The score at the midpoint between the lowest and the highest scores was 6 for online customers and 7 for in-store customers."
      },
      {
        "left": "Std Dev",
        "right": "The online scores vary from the average by 2.3 and the in-store variance is 1.9."
      }
    ],
    "explanation": "Mode is the most frequently occurring value in a dataset. Mean is the arithmetic average. Median is the middle value separating the higher half from the lower half. Standard deviation measures dispersion or spread around the mean."
  },
  {
    "number": 17,
    "type": "mcq",
    "question": "In which scenario will artificial intelligence (AI) provide the most time-saving benefit?",
    "options": {
      "A": "Aggregating fundraising sales data for a college soccer team",
      "B": "Predicting maintenance requirements for an international rental car company's fleet vehicle.",
      "C": "Determining the statistical mean, mode, and standard deviation of the grades for a class.",
      "D": "Recording daily sales for three stores owned by one franchise owner"
    },
    "answer": "B",
    "explanation": "Predictive maintenance on an international scale involves thousands of vehicles, real-time sensor streams, weather, telemetry, and complex failure pattern analysis. AI delivers immense automation and predictive accuracy here compared to simple arithmetic calculations for small groups."
  },
  {
    "number": 18,
    "type": "multichoice",
    "question": "A software developer is designing a program for processing weather data. The program must process the following data:<br/>• Wind speed recorded in miles per hour<br/>• Temperature readings from weather sensors<br/>• Precipitation levels recorded in millimeters<br/>• Visibility distance measured in miles or kilometers<br/><br/>The program has the following requirements:<br/>• The data must be stored in an organized format like tables or databases<br/>• The data consists of numerical values that can be measured and analyzed<br/><br/>Which two categories of data are used in the program? (Choose 2.)",
    "options": {
      "A": "Structured",
      "B": "Quantitative",
      "C": "Qualitative",
      "D": "Unstructured"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "The data is stored in relational tables or databases (Structured) and represents measurable numeric quantities (Quantitative)."
  },
  {
    "number": 19,
    "type": "multichoice",
    "question": "You have a comma-delimited file with 100,000 rows and 200 columns of phone sales data. One column represents the phone manufacturer.<br/><br/>You need to analyze all sales data for one manufacturer.<br/><br/>Which two techniques should you use? (Choose 2.)",
    "options": {
      "A": "Filtering",
      "B": "Truncating",
      "C": "Slicing",
      "D": "Deleting",
      "E": "Transposing"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Filtering isolates the rows corresponding to the desired manufacturer. Slicing selects specific subsets of columns and rows without permanently discarding records."
  },
  {
    "number": 20,
    "type": "mcq",
    "question": "Analyze the following Python code segment:<br/><pre style='background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;margin:10px 0;'>import datetime\n\nname = \"Gizmo\"\nage = 20\ncurrentDate = datetime.date(2025, 1, 1)\nbirthYear = currentDate.year - age\nbirthDate = datetime.date(birthYear, 1, 1)\nbirthTime = \"10:00 A.M.\"\ngraduationDate = datetime.datetime(2030, 6, 4, 14, 0, 0)\nyearsToGraduation = graduationDate.year - currentDate.year</pre>Which variables store data in a numeric data type?",
    "options": {
      "A": "age, currentDate, birthYear, birthDate, graduationDate, yearsToGraduation",
      "B": "age, birthYear, yearsToGraduation",
      "C": "age",
      "D": "age, currentDate, birthDate"
    },
    "answer": "B",
    "explanation": "<code>age</code> is an int (20). <code>currentDate.year</code> (2025) minus <code>age</code> (20) evaluates to integer 2005 (<code>birthYear</code>). <code>yearsToGraduation</code> evaluates to integer 5. <code>currentDate</code> and <code>birthDate</code> are datetime.date objects, <code>graduationDate</code> is a datetime object, and <code>name</code> and <code>birthTime</code> are strings."
  },
  {
    "number": 21,
    "type": "match",
    "question": "You are a data analytics auditor for a large public company. You need to categorize the types of data stored.<br/><br/>Match each of the four data descriptions to the category of data it represents:",
    "pairs": [
      {
        "left": "Unstructured Data",
        "right": "An archive called 'Spring Sales Campaign' that contains .svg documents, retouched images and the company style guide as a .pdf file"
      },
      {
        "left": "Structured Data",
        "right": "SQL database with calendar-year sales data"
      },
      {
        "left": "Qualitative Data",
        "right": "Results of a company-wide survey measuring feelings about the company's direction and future outlook"
      },
      {
        "left": "Metadata",
        "right": "Information about the writer of each knowledge-based article and when it was last revised"
      }
    ],
    "explanation": "Images, vector graphics, and PDF documents are unstructured media files. SQL databases store structured tabular data. Employee sentiments and opinions are subjective, qualitative data. Information detailing author attribution and modification timestamps is metadata."
  },
  {
    "number": 22,
    "type": "mcq",
    "question": "What is one goal of data privacy and protection laws such as GDPR, FERPA, and HIPAA?",
    "options": {
      "A": "To hold violators accountable for mishandling data",
      "B": "To tax companies that use private data",
      "C": "To ensure that companies openly share industry data",
      "D": "To protect companies from liability related to private data"
    },
    "answer": "A",
    "explanation": "Privacy statutes (GDPR, FERPA, HIPAA) establish strict legal protections for personal information and enforce accountability with severe fines and penalties when entities mishandle, leak, or abuse protected data."
  },
  {
    "number": 23,
    "type": "mcq",
    "question": "Which visualization type is commonly used to display the distribution of a continuous variable, with variable values on the x-axis and corresponding frequencies on the y-axis?",
    "options": {
      "A": "Column Chart",
      "B": "Line Chart",
      "C": "Histogram",
      "D": "Bar Chart"
    },
    "answer": "C",
    "explanation": "A histogram groups continuous numeric values into bins along the x-axis and displays the count or frequency of observations in each bin on the y-axis."
  },
  {
    "number": 24,
    "type": "mcq",
    "question": "A data analyst is creating a Python program to retrieve patient health records from a data source. Each patient's health record includes the following values: Patient Name, Height, Weight, Blood Pressure, Pulse, Heart Rate. They need to ensure that these values are not changed by the program.<br/><br/>Which data structure should you use to store the values for each patient?",
    "options": {
      "A": "Rows",
      "B": "Columns",
      "C": "Tuples",
      "D": "Lists"
    },
    "answer": "C",
    "explanation": "Tuples are immutable data structures in Python; once assigned, their contents cannot be modified or reordered, guaranteeing data integrity."
  },
  {
    "number": 25,
    "type": "mcq",
    "question": "You conduct a study to identify how many people exercise daily. You recruit all the study participants at gyms.<br/><br/>Which type of bias are you demonstrating?",
    "options": {
      "A": "Confirmation bias",
      "B": "Anchoring bias",
      "C": "Sampling bias",
      "D": "Motivated reasoning"
    },
    "answer": "C",
    "explanation": "Sampling bias occurs when sample members are selected in a manner that makes the sample unrepresentative of the broader target population. Recruiting solely from gyms systematically overrepresents active individuals."
  },
  {
    "number": 26,
    "type": "mcq",
    "question": "The marketing team wants to know which market segment had the highest sales last year.<br/><br/>Which type of data analytics should they use?",
    "options": {
      "A": "Descriptive analytics",
      "B": "Predictive analytics",
      "C": "Diagnostic analytics",
      "D": "Prescriptive analytics"
    },
    "answer": "A",
    "explanation": "Descriptive analytics summarizes historical data to answer 'What happened?' (in this case, summarizing last year's sales by market segment)."
  },
  {
    "number": 27,
    "type": "mcq",
    "question": "You are reviewing a database of restaurant menu items with columns: Item, Type (Sandwich, Pie, Cake, Salad, Appetizer), Menu (Lunch, Dinner, Dessert), Gluten-Free, and Vegan.<br/><br/>You need to display only items on the Dessert menu with a Type of Cake.<br/><br/>What should you do to <strong>nondestructively</strong> limit the data display?",
    "options": {
      "A": "Sort the data by Menu and within each Menu, sort by Type.",
      "B": "Add two slicers, one for Menu and one for Type. Set the Menu slicer to Dessert and the Type slicer to Cake.",
      "C": "Delete all data that has a Menu other than Dessert. Then delete all data that has a Type other than Cake.",
      "D": "Group the data by Menu and then group data on the Dessert menu by Type."
    },
    "answer": "B",
    "explanation": "Adding slicers (or filters) filters the visible display interactively and nondestructively without altering or deleting the underlying database records."
  },
  {
    "number": 28,
    "type": "mcq",
    "question": "You have produced a linear regression model which calculates house prices based on area taken up by the house, the number of bedrooms, and the number of bathrooms:<br/><br/><strong>House price = (100 + 0.5 * square meters + 8 * bedrooms + 10 * bathrooms) * 1,000</strong><br/><br/>What would the model predict for the price of a house with 800 square meters, 4 bedrooms and 3 bathrooms?",
    "options": {
      "A": "$562,000",
      "B": "$532,000",
      "C": "$600,000",
      "D": "$482,000"
    },
    "answer": "A",
    "explanation": "Evaluating the regression formula:<br/>House price = (100 + 0.5 * 800 + 8 * 4 + 10 * 3) * 1,000<br/>= (100 + 400 + 32 + 30) * 1,000<br/>= 562 * 1,000 = $562,000."
  },
  {
    "number": 29,
    "type": "match",
    "question": "You are using data analytics to help answer business questions about a new product your company released.<br/><br/>Match each type of data analytics to the question it addresses:",
    "pairs": [
      {
        "left": "Diagnostic analytics",
        "right": "Why did it happen?"
      },
      {
        "left": "Prescriptive analytics",
        "right": "What action should we take next?"
      },
      {
        "left": "Predictive analytics",
        "right": "What might happen in the future?"
      },
      {
        "left": "Descriptive analytics",
        "right": "What happened in the initial product release?"
      }
    ],
    "explanation": "Descriptive analytics explains past events ('What happened?'). Diagnostic analytics investigates causes ('Why did it happen?'). Predictive analytics models future outcomes ('What might happen?'). Prescriptive analytics recommends specific optimal courses of action ('What action should we take next?')."
  },
  {
    "number": 30,
    "type": "mcq",
    "question": "Your company has summarized a large data set for the region you live in. You need to compare results from urban and rural communities within your region.<br/><br/>What is the fastest way to obtain this information?",
    "options": {
      "A": "Disaggregate the data.",
      "B": "Collect a new data sample.",
      "C": "Review data from neighboring regions.",
      "D": "Aggregate the data."
    },
    "answer": "A",
    "explanation": "Because the company already possesses the full dataset in a summarized form, disaggregating (breaking down the regional aggregate by community type) is the fastest method to view urban vs. rural comparisons without new data collection."
  },
  {
    "number": 31,
    "type": "mcq",
    "question": "You have a small dataset that contains personally identifiable information (PII). You need to provide the data to an outside source for additional processing.<br/><br/>What could you do to protect the PII but still allow you to eventually relate the additional analysis to your original data?",
    "options": {
      "A": "Remove every instance of PII in the original dataset and add them back after the new dataset is retrieved.",
      "B": "Employ pseudonymization on the PII and use the pseudonym as the key between the new and original datasets.",
      "C": "Randomly shuffle the original dataset so that each given piece of PII is no longer associated with a particular user.",
      "D": "Retain every text-based PII in the original dataset but convert them to number-based features in the new dataset."
    },
    "answer": "B",
    "explanation": "Pseudonymization replaces identifying fields with unique pseudonymous tokens while preserving a secure internal mapping key, allowing the organization to re-link external analytical findings back to original subjects."
  },
  {
    "number": 32,
    "type": "match",
    "question": "Analyze the certified teachers dataset:<br/><br/><table style='width:100%;max-width:420px;margin:10px auto;border-collapse:collapse;border:1px solid #cbd5e1;font-size:0.85rem;text-align:center;'><tr style='background:#f1f5f9;font-weight:700;'><th style='padding:5px;border:1px solid #cbd5e1;'>School</th><th style='padding:5px;border:1px solid #cbd5e1;'>Class</th><th style='padding:5px;border:1px solid #cbd5e1;'>Format</th><th style='padding:5px;border:1px solid #cbd5e1;'>Certified Teachers</th></tr><tr><td>School A</td><td>Networking</td><td>In-Person</td><td>6</td></tr><tr><td>School A</td><td>Networking</td><td>Virtual</td><td>5</td></tr><tr><td>School A</td><td>Data Analytics</td><td>In-Person</td><td>2</td></tr><tr><td>School A</td><td>Data Analytics</td><td>Virtual</td><td>3</td></tr><tr><td>School B</td><td>Networking</td><td>In-Person</td><td>9</td></tr><tr><td>School B</td><td>Networking</td><td>Virtual</td><td>7</td></tr><tr><td>School B</td><td>Data Analytics</td><td>In-Person</td><td>2</td></tr><tr><td>School B</td><td>Data Analytics</td><td>Virtual</td><td>4</td></tr></table><br/>In a PivotTable summarizing the combined number of teachers (Virtual + In-Person):<br/>• Row 1 shows values [11, 5]<br/>• Row 2 shows values [16, 6]<br/><br/>Match the row and column labels:",
    "pairs": [
      {
        "left": "School A",
        "right": "Row label for the row with counts: 11 (Networking) and 5 (Data Analytics)"
      },
      {
        "left": "School B",
        "right": "Row label for the row with counts: 16 (Networking) and 6 (Data Analytics)"
      },
      {
        "left": "Networking",
        "right": "Column header for the column showing counts 11 and 16"
      },
      {
        "left": "Data Analytics",
        "right": "Column header for the column showing counts 5 and 6"
      }
    ],
    "explanation": "For School A: Networking = 6 + 5 = 11; Data Analytics = 2 + 3 = 5.<br/>For School B: Networking = 9 + 7 = 16; Data Analytics = 2 + 4 = 6."
  },
  {
    "number": 33,
    "type": "mcq",
    "question": "You want to show a friend your monthly budget breakdown to prove that most of your expenditure is food costs. You create a table that shows the flow of money as it moves from one budget category to the next (e.g. Total Monthly Budget -> Food & Entertainment -> Food Costs).<br/><br/>Which visualization type should you use to display your analysis based on the table shown?",
    "options": {
      "A": "Sankey diagram",
      "B": "Time series chart",
      "C": "Correlation matrix",
      "D": "Classification tree"
    },
    "answer": "A",
    "explanation": "A Sankey diagram is a flow diagram in which the width of the arrows is proportional to the flow rate of values (such as money flowing from total budget into major categories and subcategories)."
  },
  {
    "number": 34,
    "type": "multichoice",
    "question": "Select three ways that machine learning algorithms are used in data analysis. (Choose 3.)",
    "options": {
      "A": "Small Data Set Analysis",
      "B": "Regulated Data Analysis",
      "C": "Singular Historical Events",
      "D": "Anomaly Detection",
      "E": "Data Classification",
      "F": "Time Series Analysis"
    },
    "answer": [
      "D",
      "E",
      "F"
    ],
    "explanation": "Prominent data analysis applications of machine learning algorithms include detecting unusual outliers or fraudulent transactions (Anomaly Detection), assigning categories or classes to items (Data Classification), and modeling temporal sequential patterns (Time Series Analysis)."
  },
  {
    "number": 35,
    "type": "classify",
    "question": "For each statement about data disaggregation, select True or False.",
    "categories": [
      "True",
      "False"
    ],
    "items": [
      {
        "text": "Data disaggregation provides a summary of the data.",
        "category": "False"
      },
      {
        "text": "Data disaggregation combines data from multiple sources.",
        "category": "False"
      },
      {
        "text": "Data disaggregation can clarify trends and patterns among subgroups.",
        "category": "True"
      }
    ],
    "explanation": "Summarizing data and combining multiple sources describe data aggregation. Data disaggregation breaks apart aggregated datasets to reveal nuances, trends, and patterns among distinct subgroups (True)."
  },
  {
    "number": 36,
    "type": "mcq",
    "question": "You work for a recreational sports company. The table shows the company's vehicle sales:<br/><br/><table style='width:100%;max-width:440px;margin:10px auto;border-collapse:collapse;border:1px solid #cbd5e1;font-size:0.85rem;text-align:center;'><tr style='background:#f1f5f9;font-weight:700;'><th style='padding:5px;border:1px solid #cbd5e1;'>Vehicle Type</th><th style='padding:5px;border:1px solid #cbd5e1;'>Num Sold</th><th style='padding:5px;border:1px solid #cbd5e1;'>Price</th><th style='padding:5px;border:1px solid #cbd5e1;'>Total</th></tr><tr><td>Motorized Bike</td><td>600</td><td>$1,200</td><td>$720,000</td></tr><tr><td>Golf Cart</td><td>600</td><td>$7,500</td><td>$4,500,000</td></tr><tr><td>Utility Vehicle</td><td>425</td><td>$8,000</td><td>$3,400,000</td></tr><tr><td>2-Wheel Scooter</td><td>850</td><td>$900</td><td>$765,000</td></tr><tr><td>3-Wheel Scooter</td><td>1,200</td><td>$2,999</td><td>$3,598,800</td></tr><tr><td>4-Wheel Scooter</td><td>789</td><td>$3,500</td><td>$2,761,500</td></tr><tr style='font-weight:700;background:#f8fafc;'><td>Total</td><td>4,464</td><td>$24,099</td><td>$15,745,300</td></tr></table><br/>You need to show how each vehicle type <strong>contributes to the company's total sales</strong> (parts of a whole). Which visualization should you use?",
    "options": {
      "A": "Pie Chart",
      "B": "Scatter Plot",
      "C": "Clustered Column Chart",
      "D": "Dual-Axis Line/Column Chart"
    },
    "answer": "A",
    "explanation": "A pie chart (or doughnut chart) displays the proportional share that each category contributes to a single total (100%)."
  },
  {
    "number": 37,
    "type": "classify",
    "question": "You are analyzing statistics for online and in-store purchases with survey data from 300 in-store and 300 online customers:<br/><br/><table style='width:100%;max-width:420px;margin:10px auto;border-collapse:collapse;border:1px solid #cbd5e1;font-size:0.85rem;text-align:center;'><tr style='background:#f1f5f9;font-weight:700;'><th style='padding:6px;border:1px solid #cbd5e1;'>Channel</th><th style='padding:6px;border:1px solid #cbd5e1;'>Mean</th><th style='padding:6px;border:1px solid #cbd5e1;'>Median</th><th style='padding:6px;border:1px solid #cbd5e1;'>Mode</th><th style='padding:6px;border:1px solid #cbd5e1;'>Std Dev</th></tr><tr><td style='font-weight:600;'>Online</td><td>$228</td><td>$215</td><td>$199</td><td>$122</td></tr><tr><td style='font-weight:600;'>In-Store</td><td>$188</td><td>$190</td><td>$199</td><td>$66</td></tr></table><br/>For each statement about online and in-store purchases, select True or False.",
    "categories": [
      "True",
      "False"
    ],
    "items": [
      {
        "text": "In-store customers spent more money than online customers.",
        "category": "False"
      },
      {
        "text": "Online customers have a larger variance in how much they spend.",
        "category": "True"
      },
      {
        "text": "The difference between the largest amount spent and the smallest amount spent is higher for in-store customers.",
        "category": "False"
      },
      {
        "text": "The amount spent the most often is the same for online and in-store customers.",
        "category": "True"
      }
    ],
    "explanation": "Online customers had a higher average spend ($228 vs $188, so statement 1 is False). Online standard deviation is nearly double ($122 vs $66), indicating higher variance (True) and greater overall spread (so statement 3 is False). Mode ($199) is identical for both channels (True)."
  },
  {
    "number": 38,
    "type": "multichoice",
    "question": "You need to create a data view based on aggregations for further visual analysis. Your data includes sales information for the past five years for food products at your company's stores. Each product belongs to one category. For example, milk belongs to the Dairy category.<br/><br/>The data view must meet the following requirements:<br/>• Include all products and their associated categories.<br/>• Include sales subtotals for each category and year.<br/>• Display a grand total of sales for each category.<br/>• Create a summary of each category for every year.<br/><br/>Which two aggregation methods should you use to create the data view? (Choose 2.)",
    "options": {
      "A": "Pivoting",
      "B": "Merging",
      "C": "Grouping",
      "D": "Filtering"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Grouping aggregates records by dimensions (category and year) to calculate subtotals and grand totals. Pivoting reorganizes the grouped data across rows and columns (e.g. years as column headers) to produce a multi-dimensional summary view."
  },
  {
    "number": 39,
    "type": "match",
    "question": "You are working on a data science project that will allow a bank to make predictions about their prospects and customers. You need to choose the data types for each category of data.<br/><br/>Match each data description with the correct data type:",
    "pairs": [
      {
        "left": "String",
        "right": "To store customers' names, addresses, and the types of transactions."
      },
      {
        "left": "Boolean",
        "right": "To store True/False value and indicate if loan is approved or not."
      },
      {
        "left": "Numeric",
        "right": "To represent the approved loan amount."
      }
    ],
    "explanation": "Names and street addresses are text strings. An approved/rejected state is a binary true/false flag (Boolean). Loan amounts are continuous monetary values (Numeric/Float)."
  },
  {
    "number": 40,
    "type": "mcq",
    "question": "You run a t-test with an alpha value of 5% (a = 0.05) in order to test an alternative hypothesis (H1). You finish the analysis and discover that the p-value is 0.017.<br/><br/>What can you conclude about the null hypothesis (H0)?",
    "options": {
      "A": "You fail to reject the null hypothesis (H0).",
      "B": "You reject the null hypothesis (H0).",
      "C": "You accept the null hypothesis (H0).",
      "D": "You modify the null hypothesis (H0)."
    },
    "answer": "B",
    "explanation": "When the calculated p-value (0.017) is less than the significance threshold alpha (0.05), you have sufficient statistical evidence to reject the null hypothesis."
  },
  {
    "number": 41,
    "type": "mcq",
    "question": "You are given a data set with four candidate visualizations that display the time of day and number of minutes customers waited in line for service. You need to remove bias from the results by identifying and eliminating outliers.<br/><br/>Which visualization type specifically illustrates outliers in your dataset?",
    "options": {
      "A": "Box plot (Box-and-whisker plot)",
      "B": "Bar chart with standard deviation bars",
      "C": "Scatter plot with regression trend",
      "D": "Dual-line trend chart"
    },
    "answer": "A",
    "explanation": "Box-and-whisker plots visually display the median, quartiles (Q1, Q3), interquartile range (IQR), and individual outlier points plotted beyond the whiskers."
  },
  {
    "number": 42,
    "type": "multichoice",
    "question": "What are two goals of data privacy and protection laws such as GDPR, FERPA, and HIPAA? (Choose 2.)",
    "options": {
      "A": "To regulate data validation",
      "B": "To regulate how data is sorted",
      "C": "To regulate data storage",
      "D": "To regulate how data is shared"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Data privacy laws regulate how personal sensitive data must be securely stored (retention periods, encryption, access controls) and strictly regulate when and how data can be shared or transferred."
  },
  {
    "number": 43,
    "type": "match",
    "question": "Match the type of data analysis to the business analysis question it answers:",
    "pairs": [
      {
        "left": "Descriptive Analysis",
        "right": "What happened?"
      },
      {
        "left": "Diagnostic Analysis",
        "right": "Why did it happen?"
      },
      {
        "left": "Prescriptive Analysis",
        "right": "What should we do next?"
      },
      {
        "left": "Hypothesis Testing",
        "right": "Is there enough evidence to draw conclusions?"
      }
    ],
    "explanation": "Descriptive analytics looks at past data to see what occurred. Diagnostic analytics investigates why it occurred. Prescriptive analytics prescribes future actions. Hypothesis testing evaluates whether sample data provides statistically significant evidence to draw conclusions about a population."
  },
  {
    "number": 44,
    "type": "match",
    "question": "Evaluate the SQL query and match each query clause to the type of data organization it performs:<br/><pre style='background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;margin:10px 0;'>SELECT CustomerId, SUM(Amount) AS Total_Spent\nFROM Sales\nWHERE Amount > 1\nGROUP BY CustomerId\nORDER BY Total_Spent DESC;</pre>",
    "pairs": [
      {
        "left": "Aggregation",
        "right": "SELECT CustomerId, SUM(Amount) AS Total_Spent"
      },
      {
        "left": "Filtering",
        "right": "FROM Sales WHERE Amount > 1"
      },
      {
        "left": "Sorting",
        "right": "ORDER BY Total_Spent DESC"
      }
    ],
    "explanation": "SUM(Amount) calculates an aggregate total. WHERE Amount > 1 filters out rows that do not meet the condition. ORDER BY sorts the output."
  },
  {
    "number": 45,
    "type": "mcq",
    "question": "You need to compare three (3) numerical values of each data point in a series.<br/><br/>Which chart type should you use?",
    "options": {
      "A": "Area chart",
      "B": "Waterfall chart",
      "C": "Scatter chart",
      "D": "Bubble chart"
    },
    "answer": "D",
    "explanation": "A bubble chart plots data along an x-axis (value 1), a y-axis (value 2), and uses the size/area of the bubble to represent a third variable (value 3)."
  },
  {
    "number": 46,
    "type": "multichoice",
    "question": "You are tasked with completing a data analysis project for a large organization. During the project, you must handle personally identifiable information (PII).<br/><br/>Throughout the project, which three principles should you follow? (Choose 3.)",
    "options": {
      "A": "Limit your handling of the PII to only what is necessary for the current analysis.",
      "B": "Request all data from the database that contains the PII.",
      "C": "Keep track of the PII that you have during the analysis.",
      "D": "Retain only the PII that you might need for future analysis.",
      "E": "Remove all PII from your computer after the analysis is complete."
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "Core principles of PII governance include data minimization (only handle what is strictly necessary), maintaining an audit trail/inventory of PII, and securely deleting/removing local PII copies once the analysis is completed."
  },
  {
    "number": 47,
    "type": "mcq",
    "question": "As part of an ETL (Extract, Transform, Load) process, which action represents transformation?",
    "options": {
      "A": "Converting data from a summary level to a detailed level",
      "B": "Converting data from one data type to another data type or structure",
      "C": "Changing the visualization from a bar graph to a line chart",
      "D": "Pivoting the data"
    },
    "answer": "B",
    "explanation": "Transformation converts raw extracted data into clean, compatible types, formats, and relational structures ready for loading into a destination database or warehouse."
  },
  {
    "number": 48,
    "type": "multichoice",
    "question": "A stock market analyst wants to analyze the volatility in a stock price over the past 4 weeks. He wants to analyze the price on the extremely high and low days compared to usual price range days.<br/><br/>Which two visualization types meet these requirements? (Choose 2.)",
    "options": {
      "A": "Box and Whisker plot",
      "B": "Histogram",
      "C": "Pie Chart",
      "D": "Scatter Plot"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Box-and-whisker plots depict range, median, quartiles, and extreme high/low outlier days. Histograms display frequency distributions across price intervals to show typical ranges versus rare extremes."
  },
  {
    "number": 49,
    "type": "mcq",
    "question": "Which sentence most accurately describes the relationship between data and statistics?",
    "options": {
      "A": "All statistics are data, but not all data are statistics.",
      "B": "All data are statistics, but not all statistics are data.",
      "C": "Data and statistics are both purely quantitative in nature.",
      "D": "Data and statistics are both purely qualitative in nature."
    },
    "answer": "A",
    "explanation": "Statistics are mathematical figures or summaries derived from data (making all statistics data). However, raw unanalyzed observations, unstructured text, audio, and sensor streams are data but not statistics."
  },
  {
    "number": 50,
    "type": "mcq",
    "question": "You are reviewing a summary table of ecommerce sales by quarter for 2021 through 2025.<br/><br/>Which technique would allow you to view monthly sales for the year 2022?",
    "options": {
      "A": "Data Correlation",
      "B": "Data Drilling",
      "C": "Regression Analysis",
      "D": "Data Sampling"
    },
    "answer": "B",
    "explanation": "Data drilling (drilling down) allows users to navigate from a high-level summary (e.g. annual or quarterly) to finer levels of granularity (e.g. monthly or daily)."
  },
  {
    "number": 51,
    "type": "mcq",
    "question": "You create a column chart showing sales for different years. Management asks for a way to see demographic information associated with the individual sales records for each year.<br/><br/>You decide to create tables for each year that show the demographic information for the sales in that year. When someone clicks a year in the chart, the associated table will open.<br/><br/>Which reporting technique does this represent?",
    "options": {
      "A": "Unpivoting",
      "B": "Distributing",
      "C": "Disaggregating",
      "D": "Pivoting"
    },
    "answer": "C",
    "explanation": "Breaking an annual sales aggregate down into granular demographic records is data disaggregation."
  },
  {
    "number": 52,
    "type": "mcq",
    "question": "You are responsible for e-commerce sales at your company. You need to present quarterly sales data across several years to upper management using the most accurate, unbiased visualization.<br/><br/>Which visualization should you choose?",
    "options": {
      "A": "A grouped 2D column chart starting at zero baseline comparing quarters by year",
      "B": "A 3D exploded pie chart of quarterly revenue percentages",
      "C": "A dual-axis chart with an altered, truncated non-zero vertical axis",
      "D": "A 100% stacked column chart that hides total dollar volumes"
    },
    "answer": "A",
    "explanation": "A clean 2D grouped column chart with a consistent baseline starting at zero provides an accurate, unbiased comparison of sales figures across quarters without 3D visual distortion or deceptive scaling."
  },
  {
    "number": 53,
    "type": "mcq",
    "question": "You work for Company Pro and are preparing a presentation for the firm's partners. They would like to know which legal/investigative case types are the most profitable. You have prepared charts using spreadsheet data showing Number of Cases, Total Days, Gross Earnings, Total Expenses, Net Earnings, and Average Earnings Per Case.<br/><br/>Which chart minimizes misinterpretations and most accurately depicts the profitability of each case type?",
    "options": {
      "A": "Horizontal bar chart of 'Average Earnings Per Case' sorted by case type",
      "B": "Pie chart of Company Gross Earnings",
      "C": "Donut chart of Company Total Revenue vs Expenses",
      "D": "Column chart of Average Days Per Case"
    },
    "answer": "A",
    "explanation": "A horizontal bar chart sorted by 'Average Earnings Per Case' directly communicates profitability per case in clear dollar metrics without visual distortion."
  },
  {
    "number": 54,
    "type": "match",
    "question": "Match each type of data commonly used in data analysis with its corresponding sample value:",
    "pairs": [
      {
        "left": "Boolean",
        "right": "1 (or True)"
      },
      {
        "left": "Integer",
        "right": "11"
      },
      {
        "left": "Float",
        "right": "1.3"
      },
      {
        "left": "String",
        "right": "\"1,2,3,4\""
      }
    ],
    "explanation": "In computing, 1 often represents Boolean True. 11 is a whole integer. 1.3 is a floating-point number. A comma-separated sequence like '1,2,3,4' enclosed in quotes is a text String."
  },
  {
    "number": 55,
    "type": "classify",
    "question": "Analyze an MTA Subway Ridership chart from March 2025. The horizontal axis displays daily dates from 2025-03-01 to 2025-03-31. The primary left vertical axis shows Estimated Ridership (count 0 to 6,000,000), while the secondary right vertical axis shows % of Comparable Pre-Construction Start (0 to 125%).<br/><br/>For each statement about the chart, select True or False.",
    "categories": [
      "True",
      "False"
    ],
    "items": [
      {
        "text": "The x-axis has a consistent spacing for the whole dataset.",
        "category": "True"
      },
      {
        "text": "The estimated ridership shows a steady and consistent rate of decline.",
        "category": "False"
      },
      {
        "text": "Both y-axes represent population totals.",
        "category": "False"
      }
    ],
    "explanation": "The date intervals along the x-axis are evenly spaced daily intervals (True). Ridership fluctuated significantly with sharp mid-month drops and weekend valleys rather than a steady constant rate of decline (False). The left y-axis represents ridership counts, while the right y-axis represents a percentage, not a population total (False)."
  },
  {
    "number": 56,
    "type": "mcq",
    "question": "You have been given a large data set that includes location, income, and age.<br/><br/>Why should you disaggregate the data?",
    "options": {
      "A": "To combine data sets and present a summary of your findings about location, income, and age",
      "B": "To form generalizations about location, income, and age",
      "C": "To hide differences among age, location, and income",
      "D": "To analyze income within different age groups or locations"
    },
    "answer": "D",
    "explanation": "Disaggregating data breaks high-level summaries down into specific subgroup slices (e.g. evaluating income across distinct age brackets or geographic areas)."
  },
  {
    "number": 57,
    "type": "mcq",
    "question": "Which data type is appropriate for a phone number using the format (###) #### - ####?",
    "options": {
      "A": "String",
      "B": "Numeric",
      "C": "Binary",
      "D": "Boolean"
    },
    "answer": "A",
    "explanation": "Phone numbers contain non-numeric formatting characters (parentheses, spaces, dashes) and leading zeros that would be lost if stored as a numeric type. They must be stored as strings."
  },
  {
    "number": 58,
    "type": "classify",
    "question": "You have a dataset of 100,000 rows. The data values fall within a standard range and have been cleaned to remove outliers. Approximately 100 rows contain NULL values in a numeric data column.<br/><br/>For each statement about handling NULLs in this scenario, select Yes if it is a best practice or No if it is not.",
    "categories": [
      "Yes",
      "No"
    ],
    "items": [
      {
        "text": "Remove the rows that contain NULL values.",
        "category": "Yes"
      },
      {
        "text": "Replace each NULL value with a random value.",
        "category": "No"
      },
      {
        "text": "Use a statistic such as average to account for the NULL values.",
        "category": "Yes"
      }
    ],
    "explanation": "Because 100 rows is a negligible fraction of 100,000 rows (0.1%), dropping the null rows (complete case analysis) is an accepted practice (Yes). Imputing null values with a summary statistic like mean or median is also standard practice (Yes). Inserting random values introduces arbitrary noise and corrupts data validity (No)."
  },
  {
    "number": 59,
    "type": "mcq",
    "question": "You are preparing to export data from a database to a flat file to be used by another system. Each field in the file should be separated by a comma.<br/><br/>You notice that the data in several columns includes commas. You decide to enclose the values in each of these columns in double quotes (\").<br/><br/>What feature of delimited files defines enclosing column data in double quotes?",
    "options": {
      "A": "Data formatter",
      "B": "Text qualifier",
      "C": "Row delimiter",
      "D": "Column delimiter"
    },
    "answer": "B",
    "explanation": "A text qualifier (typically double quotation marks) encloses text fields that may contain the delimiter character (such as a comma), preventing parsers from splitting the field into separate columns."
  },
  {
    "number": 60,
    "type": "mcq",
    "question": "You will be analyzing sales and determining trends based on a very large dataset that includes the following columns: CustomerName, CustomerEmail, Birthdate, FirstPurchaseDate, MostRecentPurchaseDate, TotalQuantityPurchased, TotalSalesAmount.<br/><br/>You need to <strong>validate</strong> the data before you start the analysis.<br/><br/>What should you do?",
    "options": {
      "A": "Calculate statistics on TotalQuantityPurchased.",
      "B": "Create aggregations of all numeric columns.",
      "C": "Analyze FirstPurchaseDates to determine purchasing trends.",
      "D": "Verify date ranges and values for all date columns."
    },
    "answer": "D",
    "explanation": "Data validation checks data quality and logical consistency prior to modeling or aggregation. Verifying that date ranges and formats are valid (e.g. Birthdate is in the past, FirstPurchaseDate <= MostRecentPurchaseDate) is a primary data validation task."
  },
  {
    "number": 61,
    "type": "mcq",
    "question": "A data scientist at your company creates a machine learning model to help the hiring manager select candidates from thousands of job applicants who are most likely to succeed in the job role.<br/><br/>Which statement best describes how machine learning is used in this scenario?",
    "options": {
      "A": "The hiring manager queries the machine learning database for qualified applicants.",
      "B": "The machine learning model uses historical data and algorithms to predict future applicant performance.",
      "C": "The machine learning system converts applicant information into a common format.",
      "D": "The machine learning model defines the qualifications necessary for a given job or role."
    },
    "answer": "B",
    "explanation": "Supervised machine learning algorithms learn statistical associations from historical employee outcomes and training features to predict future applicant performance."
  },
  {
    "number": 62,
    "type": "match",
    "question": "Your marketing department distributes promotional items to event participants:<br/><table style='width:100%;max-width:320px;margin:10px auto;border-collapse:collapse;border:1px solid #cbd5e1;font-size:0.85rem;text-align:center;'><tr style='background:#f1f5f9;font-weight:700;'><th style='padding:5px;border:1px solid #cbd5e1;'>Promotional Item</th><th style='padding:5px;border:1px solid #cbd5e1;'>Quantity Distributed</th></tr><tr><td>T-Shirts</td><td>600</td></tr><tr><td>Stuffed Animals</td><td>425</td></tr><tr><td>Drinkware</td><td>550</td></tr><tr><td>Backpacks</td><td>100</td></tr><tr><td>Blankets</td><td>55</td></tr><tr><td>Magnets</td><td>250</td></tr><tr><td>Gift Cards</td><td>50</td></tr><tr><td>Candy</td><td>500</td></tr><tr><td>Notebooks</td><td>450</td></tr></table><br/>Match each analysis task with the data organization technique to perform it:",
    "pairs": [
      {
        "left": "Sorting",
        "right": "Can arrange distributed items from highest to lowest."
      },
      {
        "left": "Filtering (Numeric Condition)",
        "right": "Can limit the display of distributed items to greater than 500."
      },
      {
        "left": "Filtering (Category Condition)",
        "right": "Can limit the display of promotional items to stuffed animals and t-shirts."
      }
    ],
    "explanation": "Arranging items in descending numerical order is Sorting. Restricting rows based on numeric criteria (> 500) or specific categorical values (stuffed animals and t-shirts) is Filtering."
  },
  {
    "number": 63,
    "type": "mcq",
    "question": "A visualization displays sales data for two salespeople: Salesperson 1 shows ~225,000 sales and Salesperson 2 shows ~50,000 sales. A conclusion states that Salesperson 1 has a higher lead-to-sales rate than Salesperson 2 (where lead-to-sales rate = actual sales / attempted sales).<br/><br/>You need to determine the accuracy of this conclusion.<br/><br/>What should you conclude?",
    "options": {
      "A": "The conclusion is inaccurate because the visualization is missing sales lead data.",
      "B": "The conclusion is inaccurate because the visualization uses scale manipulation.",
      "C": "The conclusion is inaccurate because the visualization uses size manipulation.",
      "D": "The conclusion is accurate."
    },
    "answer": "A",
    "explanation": "A rate of conversion requires both the numerator (sales closed) and the denominator (leads attempted). The chart displays only total sales counts; without knowing how many leads each salesperson worked, no conclusion can be drawn about their lead-to-sales conversion rate."
  },
  {
    "number": 64,
    "type": "multichoice",
    "question": "In the United States and Europe, which two data points are considered non-sensitive PII (personally identifiable information)? (Choose 2.)",
    "options": {
      "A": "Job title",
      "B": "Date of birth",
      "C": "Bank account number",
      "D": "Medical records"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Job title and general Date of Birth (when unlinked to high-risk private identifiers) are classified as non-sensitive or indirect PII. Financial records (Bank account numbers) and Medical health records are legally defined as sensitive PII / special category data that require strict security protections."
  },
  {
    "number": 65,
    "type": "mcq",
    "question": "What type of data is too complex to be stored in a traditional database management system (DBMS)?",
    "options": {
      "A": "Qualitative data",
      "B": "Metadata",
      "C": "Imputed data",
      "D": "Big data"
    },
    "answer": "D",
    "explanation": "Big Data is explicitly characterized by high Volume, Velocity, and Variety (including complex semi-structured and unstructured multimedia or logs) that exceeds the storage, processing, and indexing capacity of traditional relational database management systems."
  },
  {
    "number": 66,
    "type": "mcq",
    "question": "You want to know whether there is a significant difference between the average test scores of male and female students in the same class. You check that the data is approximately normally distributed for each group, and that each group has similar variance.<br/><br/>How would you decide whether the difference in test scores between male and female students is significant?",
    "options": {
      "A": "Perform a t-test using the means and variances for male and female students and if the p-value is less than 0.05, decide that the difference is significant.",
      "B": "Perform a t-test using the medians and variances for male and female students and if the p-value is greater than 0.05, decide that the difference is significant.",
      "C": "Perform a t-test using the means and variances for male and female students and if the p-value is greater than 0.05, decide that the difference is significant.",
      "D": "Perform a t-test using the medians and variances for male and female students and if the p-value is less than 0.05, decide that the difference is significant."
    },
    "answer": "A",
    "explanation": "A two-sample t-test evaluates differences between group means using sample means and variances. If the p-value falls below the significance threshold (typically alpha = 0.05), the null hypothesis is rejected and the difference is deemed statistically significant."
  },
  {
    "number": 67,
    "type": "mcq",
    "question": "You ran a t-test with an alpha value of 1% (a = 0.01).<br/><br/>Which p-value would cause you to reject the null hypothesis?",
    "options": {
      "A": "0.001",
      "B": "0.011",
      "C": "0.09",
      "D": "0.10"
    },
    "answer": "A",
    "explanation": "To reject the null hypothesis, the calculated p-value must be less than the alpha significance level (p < 0.01). 0.001 is less than 0.01."
  },
  {
    "number": 68,
    "type": "mcq",
    "question": "You have a table of restaurant menu items with columns: Item, Type (Sandwich, Pie, Cake, Salad, Appetizer), Menu (Lunch, Dinner, Dessert), Gluten-Free, and Vegan.<br/><br/>What should you do to <strong>nondestructively</strong> limit the data display to only Dessert items with Type of Cake?",
    "options": {
      "A": "Delete all data that has a Menu other than Dessert. Then delete all data that has a Type other than Cake.",
      "B": "Group the data by Menu and then group data on the Dessert menu by Type.",
      "C": "Add two slicers, one for Menu and one for Type. Set the Menu slicer to Dessert and the Type slicer to Cake.",
      "D": "Sort the data by Menu and within each Menu, sort by Type."
    },
    "answer": "C",
    "explanation": "Slicers filter the view dynamically and nondestructively without deleting rows or mutating the underlying table."
  }
];
