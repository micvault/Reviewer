window.JAVA_98_388_QUESTIONS = [
  {
    "number": 1,
    "topic": "Topic 1, Understand Java fundamentals",
    "type": "mcq",
    "question": "You need to evaluate the following code segment. Line numbers are included for reference only.\n\n```java\n01 int a = 5;\n02 int b = 10;\n03 int c = ++a * b--;\n04 System.out.println(c);\n05 int d = a-- + ++b;\n06 System.out.println(d);\n```\n\nWhat is the output of line 04 and line 06?",
    "options": {
      "A": "Line 04: 60 ; Line 06: 16",
      "B": "Line 04: 50 ; Line 06: 16",
      "C": "Line 04: 60 ; Line 06: 15",
      "D": "Line 04: 54 ; Line 06: 14"
    },
    "answer": "A",
    "explanation": "On line 03, `++a` is a pre-increment, so `a` increments from 5 to 6 before multiplication; `b--` is a post-decrement, so it evaluates to 10 in the expression and then decrements `b` to 9. Thus `c = 6 * 10 = 60`, so line 04 prints `60`. On line 05, `a--` evaluates to 6 (then `a` becomes 5), and `++b` increments `b` from 9 back to 10 before addition, so `d = 6 + 10 = 16`, and line 06 prints `16`. (Note: the source PDF answer key erroneously highlights 50 for line 04 while correctly highlighting 16 for line 06.)"
  },
  {
    "number": 2,
    "topic": "Topic 1, Understand Java fundamentals",
    "type": "mcq",
    "question": "You have the following code segment. Line numbers are included for reference only.\n\n```java\n01 public static void main(String[] args)\n02 {\n03     double number = 27;\n04     number %= -3d;\n05     number += 10f;\n06     number *= -4;\n07     System.out.println(number);\n08 }\n```\n\nWhat is the output of line 07?",
    "options": {
      "A": "-44",
      "B": "-40.0",
      "C": "40.0",
      "D": "44.0"
    },
    "answer": "B",
    "explanation": "Line 03 initializes `double number` to `27.0`. Line 04 computes `27.0 % -3.0`, which has remainder `0.0`. Line 05 adds `10f` (`10.0`), giving `10.0`. Line 06 multiplies by `-4`, giving `-40.0`. Because `number` is a `double`, line 07 prints `-40.0`."
  },
  {
    "number": 3,
    "topic": "Topic 1, Understand Java fundamentals",
    "type": "match",
    "question": "You are interviewing for a job as a Java developer. You are presented with the following code. Line numbers are included for reference only.\n\n```java\n01 char data1 = 65;\n02 System.out.println(data1);\n03\n04 long data2 = 65;\n05 System.out.println(data2);\n06\n07 float data3 = new Float(\"-65.0\");\n08 System.out.println(data3);\n09\n10 short data4 = new Short(\"65.0\");\n11 System.out.println(data4);\n```\n\nMatch each outcome to the corresponding pair of lines when the code runs.",
    "pairs": [
      {
        "left": "The letter 'A' is displayed.",
        "right": "What happens when lines 01 and 02 are run?"
      },
      {
        "left": "The number 65 is displayed.",
        "right": "What happens when lines 04 and 05 are run?"
      },
      {
        "left": "The number -65.0 is displayed.",
        "right": "What happens when lines 07 and 08 are run?"
      },
      {
        "left": "An exception is thrown.",
        "right": "What happens when lines 10 and 11 are run?"
      }
    ],
    "explanation": "Lines 01-02 assign integer 65 (the ASCII/Unicode code point for 'A') to a `char`, so `println(char)` displays `A`. Lines 04-05 widen 65 to `long`, so `println(long)` displays `65`. Lines 07-08 parse `\"-65.0\"` via `Float` and unbox to `float`, displaying `-65.0`. Lines 10-11 call `new Short(\"65.0\")`, which throws a `NumberFormatException` because `Short` only parses integer strings without decimal points.",
    "options": [
      "The letter 'A' is displayed.",
      "The number 65 is displayed.",
      "The number -65.0 is displayed.",
      "An exception is thrown."
    ]
  },
  {
    "number": 4,
    "topic": "Topic 1, Understand Java fundamentals",
    "type": "mcq",
    "question": "You need to evaluate the following Java program. Line numbers are included for reference only.\n\n```java\n01 public static void main(String[] args) {\n02     double pi = Math.PI; //3.141593\n03     System.out.format(\"Pi is %.3f%n\", pi);\n04     System.out.format(\"Pi is %.0f%n\", pi);\n05     System.out.format(\"Pi is %09f%n\", pi);\n06 }\n```\n\nWhat is the output of lines 03, 04, and 05?",
    "options": {
      "A": "Line 03: Pi is 3.142 ; Line 04: Pi is 3 ; Line 05: Pi is 03.141593",
      "B": "Line 03: Pi is 3.14 ; Line 04: Pi is 3. ; Line 05: Pi is 0000000003.141593",
      "C": "Line 03: Pi is 3.142 ; Line 04: Pi is 0003.141593 ; Line 05: Pi is 3.1415930",
      "D": "Line 03: Pi is 3.141593 ; Line 04: Pi is 3 ; Line 05: Pi is 3.141593"
    },
    "answer": "A",
    "explanation": "In `String.format`/`PrintStream.format`: `%.3f` rounds `3.1415926...` to 3 decimal places (`Pi is 3.142`). `%.0f` displays 0 decimal digits with no trailing decimal point (`Pi is 3`). `%09f` uses the default 6 decimal digits (`3.141593`, which is 8 characters long including the decimal point) and pads with leading zeros to a minimum total width of 9 characters, producing `Pi is 03.141593`."
  },
  {
    "number": 5,
    "topic": "Topic 1, Understand Java fundamentals",
    "type": "mcq",
    "question": "You need to analyze the following code segment. Line numbers are included for reference only.\n\n```java\n01 public void printInt()\n02 {\n03     if (true) {\n04         int num = 1;\n05         if (num > 0) {\n06             num++;\n07         }\n08     }\n09     int num = 1;\n10     addOne(num);\n11     num = num - 1;\n12     System.out.println(num);\n13 }\n14\n15 public void addOne(int num)\n16 {\n17     num = num + 1;\n18 }\n```\n\nWhat is the output of line 12 when you run `printInt()`?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3"
    },
    "answer": "A",
    "explanation": "The `num` declared on line 04 is scoped only to the `if (true)` block and goes out of scope at line 08. Line 09 declares a fresh local `int num = 1;`. Java passes primitive arguments by value, so `addOne(num)` on line 10 only modifies its own parameter copy and leaves `num` in `printInt()` at `1`. Line 11 subtracts `1`, making `num` equal to `0`, which line 12 prints."
  },
  {
    "number": 6,
    "topic": "Topic 1, Understand Java fundamentals",
    "type": "mcq",
    "question": "You write the following code:\n\n```java\nScanner sc = new Scanner(\"1 Excellent 2 Good 3 Fair 4 Poor\");\nObject data1 = sc.next();\nObject data2 = sc.next();\nObject data3 = sc.nextInt();\nObject data4 = sc.nextLine();\n```\n\nWhat are the values of `data1`, `data2`, `data3`, and `data4`?",
    "options": {
      "A": "data1: 1 ; data2: Excellent ; data3: 2 ; data4: Good 3 Fair 4 Poor",
      "B": "data1: 1 ; data2: Excellent ; data3: 2 ; data4: (An empty string)",
      "C": "data1: 1 ; data2: Good ; data3: 3 ; data4: Fair 4 Poor",
      "D": "data1: 1 Excellent 2 Good 3 Fair 4 Poor ; data2: (An empty string) ; data3: 0 ; data4: (An empty string)"
    },
    "answer": "A",
    "explanation": "Using default whitespace delimiters: the first `sc.next()` reads token `\"1\"` into `data1`; the second `sc.next()` reads `\"Excellent\"` into `data2`; `sc.nextInt()` parses the next token `\"2\"` as `int` `2` (autoboxed to `Integer`) into `data3`; and `sc.nextLine()` reads the remainder of the line (`\" Good 3 Fair 4 Poor\"`, shown as `Good 3 Fair 4 Poor` in the exam options) into `data4`."
  },
  {
    "number": 7,
    "topic": "Topic 1, Understand Java fundamentals",
    "type": "mcq",
    "question": "You are creating a Java console application. You need to read a birthdate entered by the user.\n\nHow should you complete the code?\n\n```java\nimport [Slot 1]\n\npublic class DataReader\n{\n    public static String getBirthdate()\n    {\n        System.out.println(\"Enter your birthday in the format MMDDYYYY\");\n        [Slot 2];\n\n        String birthdate = [Slot 3];\n        [Slot 4];\n        return birthdate;\n    }\n}\n```",
    "options": {
      "A": "Slot 1: java.util.Scanner ; Slot 2: Scanner sc = new Scanner(System.in) ; Slot 3: sc.next() ; Slot 4: sc.close()",
      "B": "Slot 1: java.io.* ; Slot 2: InputStream stream = System.in ; Slot 3: stream.read() ; Slot 4: stream.close()",
      "C": "Slot 1: java.util.Scanner ; Slot 2: Scanner sc = new Scanner(System.in) ; Slot 3: sc.wait() ; Slot 4: sc.close()",
      "D": "Slot 1: java.io.* ; Slot 2: InputStream stream = System.in ; Slot 3: stream.mark(8) ; Slot 4: stream.wait()"
    },
    "answer": "A",
    "explanation": "`Scanner` (in `java.util.Scanner`) provides `sc.next()`, which reads the next whitespace-delimited token from `System.in` and returns a `String` without throwing checked exceptions, followed by `sc.close()`. (Note: the source PDF answer key erroneously highlights Option B, which fails to compile in Java because `InputStream.read()` returns an `int` byte value rather than a `String` and both `read()` and `close()` throw an uncaught/undeclared `IOException`.)"
  },
  {
    "number": 8,
    "topic": "Topic 1, Understand Java fundamentals",
    "type": "mcq",
    "question": "You need to evaluate the following Java program. Line numbers are included for reference only.\n\n```java\n01 public class JavaProgram1\n02 {\n03     int x = 25;\n04\n05     public static void main(String[] args)\n06     {\n07         JavaProgram1 app = new JavaProgram1();\n08         {\n09             int x = 5;\n10         }\n11         {\n12             int x = 10;\n13         }\n14         int x = 100;\n15         System.out.println(x);\n16         System.out.println(app.x);\n17     }\n18     public JavaProgram1()\n19     {\n20         int x = 1;\n21         System.out.println(x);\n22     }\n23 }\n```\n\nWhich three values (from 1, 5, 10, 25, 100) will be displayed in sequence?",
    "options": {
      "A": "1, 100, 25",
      "B": "25, 100, 1",
      "C": "1, 5, 10",
      "D": "1, 25, 100"
    },
    "answer": "A",
    "explanation": "Line 07 instantiates `JavaProgram1`, initializing the instance field `this.x = 25` and then executing the constructor (lines 18-22), where local `int x = 1` shadows `this.x` and prints `1` first. The local `x` variables on lines 09 (`5`) and 12 (`10`) go out of scope at the end of their respective inner blocks. Line 14 declares `int x = 100` in `main`, so line 15 prints `100` second, and line 16 prints the instance field `app.x` (`25`) third."
  },
  {
    "number": 9,
    "topic": "Topic 1, Understand Java fundamentals",
    "type": "mcq",
    "question": "You are interviewing for a job at Adventure Works, Inc. The hiring manager asks you to create a single console program that takes multiple arguments from the command line and writes them to the screen in the same order as they were typed on the command line.\n\nAvailable code segments:\n- `public static void main(String arguments) {`\n- `public static void main(String[] args) {`\n- `for (int i = 0; i < args.length; i++) {`\n- `for (int i = 0; i < arguments.length; i++) {`\n- `for (int i = 1; i <= Integer.parseInt(args[0]); i++) {`\n- `System.out.println(args[i]); } }`\n- `System.out.println(arguments[i]); } }`\n\nWhich three code segments combined in order form the valid solution?",
    "options": {
      "A": "public static void main(String[] args) {  for (int i = 0; i < args.length; i++) {  System.out.println(args[i]); } }",
      "B": "public static void main(String[] args) {  for (int i = 0; i < arguments.length; i++) {  System.out.println(arguments[i]); } }",
      "C": "public static void main(String arguments) {  for (int i = 0; i < arguments.length; i++) {  System.out.println(arguments[i]); } }",
      "D": "public static void main(String[] args) {  for (int i = 1; i <= Integer.parseInt(args[0]); i++) {  System.out.println(args[i]); } }"
    },
    "answer": "A",
    "explanation": "A valid Java entry point for command-line arguments requires `public static void main(String[] args)`, after which the `for` loop iterates from `i = 0` to `args.length - 1` and prints `args[i]` using the matching parameter name `args`. (Note: the source PDF screenshot erroneously combines `main(String[] args)` with `arguments.length` and `arguments[i]`, which fails to compile because `arguments` is undeclared.)"
  },
  {
    "number": 10,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You need to evaluate the following code. Line numbers are included for reference only.\n\n```java\n01 public static int fee(char model) {\n02     int price = 0;\n03     switch (model) {\n04         case 'A':\n05             price = 50;\n06             break;\n07         case 'T':\n08             price = 20;\n09         case 'C':\n10             price = 5;\n11             break;\n12         default:\n13             price = 100;\n14             break;\n15     }\n16     return price;\n17 }\n```\n\nWhat is the return value when `model` is `'A'`, `'T'`, `'C'`, and any other value?",
    "options": {
      "A": "'A' returns 50 ; 'T' returns 5 ; 'C' returns 5 ; any other value returns 100",
      "B": "'A' returns 50 ; 'T' returns 20 ; 'C' returns 5 ; any other value returns 100",
      "C": "'A' returns 50 ; 'T' returns 20 ; 'C' returns 100 ; any other value returns 100",
      "D": "'A' returns 50 ; 'T' returns 5 ; 'C' returns 100 ; any other value returns 100"
    },
    "answer": "A",
    "explanation": "When `model` is `'A'`, `price` becomes `50` and `break` exits the switch. When `model` is `'T'`, `price` is set to `20`, but because there is no `break;` statement after line 08, execution falls through into `case 'C':` and overwrites `price` with `5` before hitting `break;` on line 11. `'C'` directly sets `price = 5`, and any other value hits `default:` and returns `100`. (Note: the source PDF answer key erroneously highlights 20 for `'T'`, overlooking the switch fall-through.)"
  },
  {
    "number": 11,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You have the following code:\n\n```java\nint num1 = 10;\nint num2 = 20;\nint num3 = 30;\n```\n\nYou need to create an `int` array named `numbers` initialized with `num1`, `num2`, and `num3`.\n\nAvailable code segments: `(num1, num2, num3)`, `[num1, num2, num3]`, `{num1, num2, num3}`, `int`, `int[]`, `new int`, `new int[]`.\n\nHow should you complete `[Slot 1] numbers = [Slot 2] [Slot 3];`?",
    "options": {
      "A": "int[] numbers = new int[] {num1, num2, num3};",
      "B": "int numbers = new int[] {num1, num2, num3};",
      "C": "int[] numbers = new int [num1, num2, num3];",
      "D": "int[] numbers = new int[] (num1, num2, num3);"
    },
    "answer": "A",
    "explanation": "To declare an `int` array variable and initialize it with an anonymous array initializer in Java, use `int[]` as the variable type, `new int[]` to construct the array, and curly braces `{num1, num2, num3}` for the element list."
  },
  {
    "number": 12,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You are creating a method that processes invoices. The invoices are contained in an `ArrayList` instance. After each invoice is processed, the method must remove the invoice from the `ArrayList` instance.\n\nHow should you complete the code?\n\n```java\npublic static void Process(ArrayList<String> invoices)\n{\n    for (int i = [Slot 1]; i < invoices.[Slot 2]; [Slot 3]\n    {\n        String invoice = invoices.get(i);\n        // TODO: Process the invoice\n        invoices.remove(i);\n    }\n}\n```",
    "options": {
      "A": "Slot 1: 0 ; Slot 2: size() ; Slot 3: )",
      "B": "Slot 1: 0 ; Slot 2: size() ; Slot 3: i = i + 1)",
      "C": "Slot 1: 0 ; Slot 2: size() - 1 ; Slot 3: i = i + 1)",
      "D": "Slot 1: 1 ; Slot 2: size() + 1 ; Slot 3: )"
    },
    "answer": "A",
    "explanation": "Starting at index `0` and looping while `i < invoices.size()`, calling `invoices.remove(i)` removes the element at index `0` and shifts all remaining elements left by one position while shrinking `invoices.size()` by 1. Therefore, the `for` loop update clause must be left empty (`)`) so `i` remains `0` and processes every element until the list is empty. (Note: the source PDF answer key erroneously highlights `i = i + 1)` for Slot 3, which skips every second element and leaves half the invoices unremoved.)"
  },
  {
    "number": 13,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You are writing a Java method. The method accepts a two-dimensional `String` array and prints the content of each array element. The size of each dimension of the array might be different.\n\nHow should you complete the code?\n\n```java\npublic void traverse([Slot 1] board)\n{\n    for (int x = 0; x < [Slot 2]; x++)\n    {\n        for (int y = 0; y < [Slot 3]; y++)\n        {\n            System.out.println([Slot 4]);\n        }\n    }\n}\n```",
    "options": {
      "A": "Slot 1: String[][] ; Slot 2: board.length ; Slot 3: board[x].length ; Slot 4: board[x][y]",
      "B": "Slot 1: String[][] ; Slot 2: board.length ; Slot 3: board[y].length ; Slot 4: board[x][y]",
      "C": "Slot 1: String[][] ; Slot 2: board.length ; Slot 3: board.length ; Slot 4: board[x][y]",
      "D": "Slot 1: String[] ; Slot 2: board[].length ; Slot 3: board[x].length ; Slot 4: board[x]"
    },
    "answer": "A",
    "explanation": "A two-dimensional `String` array parameter uses type `String[][]`. The outer loop iterates over the rows up to `board.length`. Because rows in a ragged (jagged) 2D array can have different lengths, the inner loop must check `board[x].length` for the current row `x`, and each element is accessed with `board[x][y]`."
  },
  {
    "number": 14,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You are developing a Java program to play Tic-Tac-Toe. You define the following array to store the state of the board:\n\n```java\nchar[][] grid = {\n    {'-','-','X'},\n    {'-','-','-'},\n    {'-','O','-'}\n};\n```\n\nWhich array element contains an \"x\" and which array element contains an \"o\"?",
    "options": {
      "A": "x: grid[0][2] ; o: grid[2][1]",
      "B": "x: grid[1][3] ; o: grid[3][2]",
      "C": "x: grid[2][0] ; o: grid[1][2]",
      "D": "x: grid[0][2] ; o: grid[1][2]"
    },
    "answer": "A",
    "explanation": "Java arrays are 0-indexed (`grid[row][column]`). `'X'` is in the first row (index `0`) and third column (index `2`), so `grid[0][2]`. `'O'` is in the third row (index `2`) and second column (index `1`), so `grid[2][1]`."
  },
  {
    "number": 15,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You are writing a Java program. The program must meet the following requirements:\n- Truncate `firstName` to its first five characters\n- Set `output` to a string that contains the `firstName` and the number of characters in `firstName`\n\nHow should you complete the code?\n\n```java\npublic static void main(String[] args)\n{\n    String firstName = \"Christopher\";\n\n    firstName = firstName.[Slot 1]\n\n    String output = String.format(\"[Slot 2] is [Slot 3] characters long\", firstName, firstName.[Slot 4]);\n\n    System.out.println(output);\n}\n```",
    "options": {
      "A": "Slot 1: substring(0,5); ; Slot 2: %s ; Slot 3: %d ; Slot 4: length()",
      "B": "Slot 1: substring(0,5); ; Slot 2: %s ; Slot 3: %f ; Slot 4: length()",
      "C": "Slot 1: substring(5); ; Slot 2: %s ; Slot 3: %d ; Slot 4: codePointCount()",
      "D": "Slot 1: subSequence(5,0); ; Slot 2: %n ; Slot 3: %c ; Slot 4: chars()"
    },
    "answer": "A",
    "explanation": "`firstName.substring(0, 5)` extracts characters at indices 0 through 4 (`\"Chris\"`). In `String.format`, `%s` formats the `String` `firstName`, `%d` formats the integer returned by `firstName.length()`, and `length()` returns `5` (`\"Chris is 5 characters long\"`). (Note: the source PDF answer key erroneously highlights `%f` for Slot 3, which throws `IllegalFormatConversionException` at runtime because `length()` returns an `int`, not a floating-point value.)"
  },
  {
    "number": 16,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "match",
    "question": "You are writing a Java program that collects patient information and stores it in a database. You need to ensure that the program stores data using the least amount of memory.\n\nMatch the smallest suitable Java data type (from `boolean`, `byte`, `char`, `float`, `short`) to each variable declaration.",
    "pairs": [
      {
        "left": "short",
        "right": "birthYear = 1974;"
      },
      {
        "left": "boolean",
        "right": "exempt = false;"
      },
      {
        "left": "char",
        "right": "initial = 'D';"
      },
      {
        "left": "float",
        "right": "salary = 22123.5f;"
      }
    ],
    "explanation": "`1974` exceeds the `byte` range (-128 to 127), so `short` (16-bit signed integer, -32,768 to 32,767) is the smallest integer type that fits `birthYear`. `false` requires `boolean`. `'D'` is a single character literal requiring `char`. `22123.5f` is a 32-bit single-precision floating-point literal matching `float` (smaller than 64-bit `double`).",
    "options": [
      "short",
      "boolean",
      "char",
      "float"
    ]
  },
  {
    "number": 17,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You are writing a Java method that evaluates an arithmetic formula. The method accepts an `int` value named `number`, raises the value to the second power, and returns the negative value of the result.\n\nAvailable code segments: `-1`, `2`, `number`, `+`, `-`, `*`, `^`.\n\nHow should you complete the code?\n\n```java\npublic static int negativeSquare(int number) {\n    return [Slot 1] ([Slot 2] [Slot 3] [Slot 4]);\n}\n```",
    "options": {
      "A": "return - (number * number);",
      "B": "return - (number ^ 2);",
      "C": "return -1 (number * number);",
      "D": "return - (number + number);"
    },
    "answer": "A",
    "explanation": "Multiplying `number * number` computes the square of `number`, and the unary `-` operator negates the parenthesized product (`-(number * number)`). In Java, `^` is bitwise XOR rather than exponentiation, and `-1 (...)` is invalid syntax because Java has no implicit multiplication."
  },
  {
    "number": 18,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You are creating a method that converts a string representation of a number into an actual number. The numbers passed into the method include whole numbers and fractional numbers.\n\nHow should you complete the code?\n\n```java\npublic void convertStringToNumber(String numberAsString)\n{\n    [Slot 1] number = [Slot 2].[Slot 3](numberAsString);\n    System.out.println(number);\n}\n```",
    "options": {
      "A": "double number = Double.parseDouble(numberAsString);",
      "B": "String number = Integer.parseInt(numberAsString);",
      "C": "double number = double.parseDouble(numberAsString);",
      "D": "Integer number = Double.format(numberAsString);"
    },
    "answer": "A",
    "explanation": "Because inputs may include both whole and fractional numbers, the variable must be declared as `double`, and `Double.parseDouble(numberAsString)` (using the `Double` wrapper class, not primitive `double`) parses the `String` into a `double`. (Note: the source PDF answer key erroneously highlights `String number = Integer.parseInt(numberAsString);`, which fails both to compile—cannot assign `int` to `String`—and to parse fractional numbers.)"
  },
  {
    "number": 19,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You attend an interview for a job as a Java programmer. You need to declare a two by three array of the `double` type with initial values.\n\nAvailable code segments: `[[`, `]];`, `][`, `{{`, `}};`, `}{`, `},{`, `],[`.\n\nHow should you complete the code?\n\n```java\ndouble[][] maxArray = [Slot 1] 0.77,3.4,55 [Slot 2] 2.2,.645,2 [Slot 3]\n```",
    "options": {
      "A": "double[][] maxArray = {{ 0.77,3.4,55 },{ 2.2,.645,2 }};",
      "B": "double[][] maxArray = [[ 0.77,3.4,55 ],[ 2.2,.645,2 ]];",
      "C": "double[][] maxArray = {{ 0.77,3.4,55 }{ 2.2,.645,2 }};",
      "D": "double[][] maxArray = [[ 0.77,3.4,55 ][ 2.2,.645,2 ]];"
    },
    "answer": "A",
    "explanation": "In Java, a 2D array initializer uses outer curly braces `{ ... }` containing comma-separated row initializers enclosed in inner curly braces `{ ... }`, terminated by a semicolon: `{{ 0.77,3.4,55 },{ 2.2,.645,2 }};`."
  },
  {
    "number": 20,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "classify",
    "question": "You are interviewing for a job as a Java developer. You need to evaluate the following code. Line numbers are included for reference only.\n\n```java\n01 String s1 = \"Hello World\";\n02 String s2 = \"Hello World\";\n03 String s3 = s2;\n04\n05\n```\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "categories": [
      "Yes",
      "No"
    ],
    "items": [
      {
        "text": "s1 and s2 refer to the same object in memory.",
        "category": "Yes"
      },
      {
        "text": "s2 and s3 refer to the same object in memory.",
        "category": "Yes"
      },
      {
        "text": "A different string can be assigned to s1 on line 04.",
        "category": "Yes"
      },
      {
        "text": "A different string can be assigned to s2 on line 05.",
        "category": "Yes"
      }
    ],
    "explanation": "String literals with identical content are interned in the JVM String Constant Pool, so `s1` and `s2` point to the same `String` object in memory (`Yes`). Line 03 copies the reference from `s2` to `s3`, so `s2` and `s3` also refer to the same object (`Yes`). Because neither `s1` nor `s2` is declared `final`, a different `String` reference can be assigned to `s1` on line 04 (`Yes`) and to `s2` on line 05 (`Yes`); Java `String` immutability means the underlying `\"Hello World\"` object cannot be mutated in place, not that reference variables cannot be reassigned. (Note: the source PDF answer key erroneously marks `No` for the last two statements by confusing `String` immutability with variable reassignment.)"
  },
  {
    "number": 21,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "The question requires that you evaluate the underlined text to determine if it is correct.\n\nYou should use <u>an int</u> data type to store the numeric value 3,000,000,000 (3 billion) so that the least amount of memory is used.\n\nReview the underlined text. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct.",
    "options": {
      "A": "No change is needed.",
      "B": "a short",
      "C": "a byte",
      "D": "a long"
    },
    "answer": "D",
    "explanation": "In Java, `byte` holds up to 127, `short` holds up to 32,767, and a 32-bit signed `int` holds up to 2,147,483,647 (~2.15 billion). Because 3,000,000,000 exceeds the maximum value of an `int`, a 64-bit `long` is the smallest primitive integer type that can store it."
  },
  {
    "number": 22,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You need to evaluate the following code segment:\n\n```java\ndouble dNum = 2.667;\nint iNum = 0;\niNum = (int)dNum;\n```\n\nWhat happens when the code segment is run?",
    "options": {
      "A": "iNum has a value of 0.",
      "B": "An exception is thrown.",
      "C": "iNum has a value of 2.",
      "D": "iNum has a value of 3."
    },
    "answer": "C",
    "explanation": "Casting a double to an int in Java performs a narrowing primitive conversion that truncates the decimal portion toward zero rather than rounding. Therefore, (int) 2.667 evaluates to 2, no exception is thrown, and iNum holds the value 2."
  },
  {
    "number": 23,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You are writing a Java method.\n\nThe program must meet the following requirements:\n- Accept a `String` parameter `firstName`\n- Display a welcome message that contains `firstName`\n- Ensure that the first letter of the name is capitalized, and the remaining letters are in lowercase\n\nAvailable code segments: `charAt`, `substring`, `toLowerCase`, `toUpperCase` (each may be used once, more than once, or not at all).\n\n```java\npublic String showGreeting(String firstName)\n{\n    String welcomeMsg = \"Welcome, \";\n    welcomeMsg += firstName.[1](0, 1).[2]() +\n        firstName.[3](1).[4]();\n    return welcomeMsg;\n}\n```\n\nWhich code segments correctly complete `[1]`, `[2]`, `[3]`, and `[4]`?",
    "options": {
      "A": "[1] charAt, [2] substring, [3] toUpperCase, [4] toLowerCase",
      "B": "[1] substring, [2] toUpperCase, [3] substring, [4] toLowerCase",
      "C": "[1] substring, [2] toLowerCase, [3] substring, [4] toUpperCase",
      "D": "[1] charAt, [2] toUpperCase, [3] substring, [4] toLowerCase"
    },
    "answer": "B",
    "explanation": "`firstName.substring(0, 1)` extracts the first character as a String so `.toUpperCase()` can be chained on it (whereas `charAt` takes one argument and returns a primitive `char`, which has no `.toUpperCase()` or `.substring()` method). Then `firstName.substring(1)` extracts the rest of the string starting at index 1, and `.toLowerCase()` converts those remaining characters to lowercase. (Note: the source PDF's answer screenshot mistakenly places `charAt` and `substring` in invalid positions that do not compile.)"
  },
  {
    "number": 24,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You work as a Java programmer.\n\nYou need to convert a numeric `String` to a primitive `double` value.\n\nWhat code segment should you use?",
    "options": {
      "A": "Double.valueOf(numberString);",
      "B": "double.parseDouble(numberString);",
      "C": "String.parseDouble(numberString);",
      "D": "Double.parseDouble(numberString);"
    },
    "answer": "D",
    "explanation": "`Double.parseDouble(numberString)` parses a String and returns a primitive `double`. `Double.valueOf(numberString)` returns a `Double` wrapper object rather than a primitive `double`. `double` is a primitive keyword (not a class) so `double.parseDouble(...)` fails to compile, and `String` does not define a `parseDouble` method. (Note: the source PDF prints B as its key, which is an error in the exam dump.)"
  },
  {
    "number": 25,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "match",
    "question": "Your instructor asks you to evaluate four arithmetic code segments.\n\nWhat is the value of each code segment? Match each arithmetic expression to its resulting value in Java.",
    "options": [
      "0",
      "1",
      "2",
      "2.5",
      "15",
      "19",
      "26",
      "90"
    ],
    "pairs": [
      {
        "left": "19",
        "right": "(2 + 3) * 4 - 1"
      },
      {
        "left": "26",
        "right": "4 * 4 + 2 * 5"
      },
      {
        "left": "1",
        "right": "8 * 2 % 3"
      },
      {
        "left": "2",
        "right": "5 / 2 - 4 % 2"
      }
    ],
    "explanation": "Following Java operator precedence and integer arithmetic: `(2 + 3) * 4 - 1` = `5 * 4 - 1` = `19`; `4 * 4 + 2 * 5` = `16 + 10` = `26`; `8 * 2 % 3` evaluates left-to-right (`16 % 3`) = `1`; and `5 / 2 - 4 % 2` performs integer division (`5 / 2` = `2`) minus remainder (`4 % 2` = `0`) = `2`."
  },
  {
    "number": 26,
    "topic": "Topic 2, Work with data types, variables, and expressions",
    "type": "mcq",
    "question": "You are writing a Java console program. The program accepts command line arguments.\n\nYou need to ensure that the `main` method parses and handles each command line argument.\n\n```java\npublic static void main([1] args)\n{\n    for (int i = 0; i < [2]; i++)\n    {\n        handleArgument([3]);\n    }\n}\n```\n\nDropdown choices:\n- `[1]`: `ArrayList`, `String`, `String[]`\n- `[2]`: `args[i]`, `args[0]`, `args.length`, `args.length - 1`, `args.length + 1`\n- `[3]`: `args[i]`, `args[0]`, `args.charAt(i)`\n\nWhich selections correctly complete the code?",
    "options": {
      "A": "[1] String[], [2] args[i], [3] args.charAt(i)",
      "B": "[1] String[], [2] args.length, [3] args[i]",
      "C": "[1] String[], [2] args.length - 1, [3] args[i]",
      "D": "[1] String, [2] args.length, [3] args[0]"
    },
    "answer": "B",
    "explanation": "Java's `main` entry point accepts a `String[]` array (`String[] args`). To iterate through every element from index `0` to `args.length - 1`, the loop condition must be `i < args.length` (using `args.length - 1` skips the last argument, and `args[i]` is a String rather than an int bound). Each individual argument is accessed as `args[i]` (`args.charAt(i)` does not compile because `args` is an array, not a String). (Note: the source PDF's green highlights erroneously select `args[i]` and `args.charAt(i)`.)"
  },
  {
    "number": 27,
    "topic": "Topic 3, Implement flow control",
    "type": "mcq",
    "question": "You work as an intern Java programmer at Adventure Works. Your team lead asks you to create a method.\n\nThe method must meet the following requirements:\n- Accept an `int` array\n- Check for duplicate values in the array\n- Stop the outer loop as soon as a duplicate value has been detected and return `true`\n- Return `false` if all values in the array are unique\n\n```java\npublic static boolean duplicate(int[] array) {\n    boolean isDuplicate = false;\n    for ([1] [2] x++) {\n        for (int y = x + 1; y < array.length; [3])\n            if (array[x] == array[y])\n                isDuplicate = true;\n        if (isDuplicate)\n        {\n            [4]\n        }\n    }\n    return isDuplicate;\n}\n```\n\nDropdown choices:\n- `[1]`: `x = 0;`, `x = 1;`, `int x = 1;`, `int x = 0;`\n- `[2]`: `x < array.length - 2;`, `x < array.length - 1;`, `x <= array.length;`, `x <= array.length - 1;`\n- `[3]`: `x = x + 1`, `y++`, `y = y - 1`, `x--`\n- `[4]`: `break;`, `switch;`, `finally;`, `continue;`\n\nWhich selections correctly complete the code?",
    "options": {
      "A": "[1] int x = 0;  [2] x <= array.length;  [3] y = y - 1  [4] break;",
      "B": "[1] int x = 0;  [2] x < array.length - 1;  [3] y++  [4] break;",
      "C": "[1] int x = 1;  [2] x < array.length - 1;  [3] y++  [4] continue;",
      "D": "[1] int x = 0;  [2] x < array.length - 2;  [3] y++  [4] break;"
    },
    "answer": "B",
    "explanation": "`int x = 0;` declares and starts `x` at the first array index. Since the inner loop compares `array[x]` with `array[y]` starting at `y = x + 1`, `x` only needs to reach `array.length - 2` (`x < array.length - 1;`; `x <= array.length;` causes an `ArrayIndexOutOfBoundsException`, and `x < array.length - 2;` fails to compare the last two elements). The inner loop must increment `y` with `y++` (not `y = y - 1`, which causes an underflow/out-of-bounds error). Finally, `break;` exits the outer `for` loop immediately once `isDuplicate` becomes `true`. (Note: the source PDF's green highlights erroneously choose `x <= array.length;` and `y = y - 1`.)"
  },
  {
    "number": 28,
    "topic": "Topic 3, Implement flow control",
    "type": "classify",
    "question": "You are interviewing for a job as a Java developer. You need to demonstrate your understanding of `switch` statements.\n\nSegment 1:\n\n```java\nif (age >= 25) {\n    discount = 0.50;\n} else if (age >= 21) {\n    discount = 0.25;\n} else {\n    discount = 0.0;\n}\n```\n\nSegment 2:\n\n```java\nif (grade == \"A\") {\n    message = \"Exceeds Standards\";\n} else if (grade == \"B\") {\n    message = \"Meets Standards\";\n} else {\n    message = \"Needs Improvement\";\n}\n```\n\nSegment 3:\n\n```java\nif (gpa == 4.0) {\n    priority = 1;\n} else if (gpa >= 3.0) {\n    priority = 2;\n} else if (gpa >= 2.5) {\n    priority = 3;\n}\n```\n\nFor each code segment, select **Yes** if it can be changed to a `switch` statement with up to three `case` statements. Otherwise, select **No**.",
    "categories": [
      "Yes",
      "No"
    ],
    "items": [
      {
        "text": "Segment 1 (age >= 25 / age >= 21 / else)",
        "category": "No"
      },
      {
        "text": "Segment 2 (grade == \"A\" / grade == \"B\" / else)",
        "category": "Yes"
      },
      {
        "text": "Segment 3 (gpa == 4.0 / gpa >= 3.0 / gpa >= 2.5)",
        "category": "No"
      }
    ],
    "explanation": "Segment 1 uses open-ended relational inequalities (`age >= 25` and `age >= 21`), which cannot be represented as a `switch` statement with at most three discrete `case` constants (No). Segment 2 compares a `String` against two discrete literals (`\"A\"` and `\"B\"`) plus a fallback `else`; since Java 7, `switch` supports `String` values, so it can be rewritten using `case \"A\":`, `case \"B\":`, and `default:` (Yes). Segment 3 evaluates a `double` (`gpa`) with `>=` range conditions, and Java `switch` statements do not support `double`/`float` types or relational range operators (No). (Note: the source PDF erroneously marks all three Yes.)"
  },
  {
    "number": 29,
    "topic": "Topic 3, Implement flow control",
    "type": "mcq",
    "question": "You are writing a Java method.\n\nThe method must meet the following requirements:\n- Accept a `String` array named `entries`\n- Iterate through `entries`\n- Stop the iteration and return `false` if any element has more than 10 characters\n- Otherwise, return `true`\n\n```java\npublic boolean validateEntries(String[] entries) {\n    boolean allValidEntries = true;\n    [1] (String entry [2] entries) {\n        if (entry.length() > 10) {\n            allValidEntries = false;\n            [3]\n        }\n    }\n    return allValidEntries;\n}\n```\n\nDropdown choices:\n- `[1]`: `do`, `for`, `while`\n- `[2]`: `;`, `:`, `++`, `instanceof`\n- `[3]`: `break;`, `continue;`, `goto;`\n\nWhich selections correctly complete the code?",
    "options": {
      "A": "[1] while, [2] :, [3] break;",
      "B": "[1] for, [2] :, [3] break;",
      "C": "[1] for, [2] :, [3] continue;",
      "D": "[1] for, [2] instanceof, [3] break;"
    },
    "answer": "B",
    "explanation": "An enhanced for-each loop in Java uses the syntax `for (String entry : entries)`. Inside the `if (entry.length() > 10)` block, `break;` exits the loop immediately after setting `allValidEntries = false;`, whereas `continue;` would keep iterating and `goto;` is a reserved word not supported as a statement in Java. (Note: the source PDF's green highlight erroneously selects `while` instead of `for`.)"
  },
  {
    "number": 30,
    "topic": "Topic 3, Implement flow control",
    "type": "mcq",
    "question": "Traders hires you to write a Java program to manage account openings.\n\nTo open a new account, a user must meet one of the following requirements:\n- be over 65 years old and have a minimum annual income of 10,000\n- be at least 21 and have an annual income greater than 25,000\n\nAvailable operators: `>`, `>=`, `<`, `<=`, `&&`, `||`, `==`, `!=` (each operator may be used once, more than once, or not at all).\n\n```java\nif (age [1] 65 [2] income [3] 10000 [4]\n    age [5] 21 [6] income [7] 25000) {\n    System.out.println(\"Approved\");\n}\nelse {\n    System.out.println(\"Declined\");\n}\n```\n\nWhich operators correctly complete `[1]` through `[7]`?",
    "options": {
      "A": "[1] >, [2] &&, [3] <=, [4] ||, [5] >, [6] &&, [7] >",
      "B": "[1] >, [2] &&, [3] >=, [4] ||, [5] >=, [6] &&, [7] >",
      "C": "[1] >=, [2] &&, [3] >=, [4] ||, [5] >, [6] &&, [7] >=",
      "D": "[1] >, [2] ||, [3] >=, [4] &&, [5] >=, [6] ||, [7] >"
    },
    "answer": "B",
    "explanation": "\"Over 65\" means strictly greater (`age > 65`), \"minimum annual income of 10,000\" means greater than or equal (`income >= 10000`), \"at least 21\" means `age >= 21`, and \"greater than 25,000\" means `income > 25000`. Both sub-conditions within each requirement use `&&`, and the two alternative requirements are joined by `||` (which has lower precedence than `&&`). (Note: the source PDF's answer screenshot mistakenly places `<=` for `income ... 10000` and `>` for `age ... 21`.)"
  },
  {
    "number": 31,
    "topic": "Topic 3, Implement flow control",
    "type": "mcq",
    "question": "You are writing a Java method named `countdown`.\n\nThe method must meet the following requirements:\n- Accept an `int` parameter named `start`\n- Display all numbers from `start` to zero in decrements of one\n\n```java\npublic static void countdown(int start) {\n    for ([1] [2] [3]) {\n        System.out.println(i);\n    }\n}\n```\n\nDropdown choices:\n- `[1]`: `int i = start;`, `int i == start;`, `int i <= start;`, `int i < start;`\n- `[2]`: `i <= 0;`, `i < 0;`, `i > 0;`, `i >= 0;`\n- `[3]`: `++i`, `+i`, `--i`, `-i`\n\nWhich selections correctly complete the code?",
    "options": {
      "A": "[1] int i = start;  [2] i > 0;  [3] --i",
      "B": "[1] int i = start;  [2] i >= 0;  [3] ++i",
      "C": "[1] int i = start;  [2] i >= 0;  [3] --i",
      "D": "[1] int i <= start;  [2] i >= 0;  [3] --i"
    },
    "answer": "C",
    "explanation": "The loop initializes `int i = start;`, continues while `i >= 0;` so that `0` is also displayed (unlike `i > 0;`, which stops at `1`), and decrements `i` by `1` on each iteration with `--i`."
  },
  {
    "number": 32,
    "topic": "Topic 3, Implement flow control",
    "type": "mcq",
    "question": "You work as a Java programmer. A member of the team creates the following program. Line numbers are included for reference only.\n\n```java\n01 public static void main(String[] args) {\n02     int timer = 60;\n03 \n04     while (timer => 0)\n05     {\n06         if (timer = 0)\n07             break;\n08         else\n09         {\n10             System.out.println(\"The timer is counting down...\");\n11             timer++;\n12         }\n13     }\n14 }\n```\n\nThe program is supposed to display a message to the console while it counts down from 60. The method does not work as intended.\n\n```java\npublic static void main(String[] args) {\n    int timer = 60;\n\n    while (timer [1] 0) {\n        if (timer [2] 0) {\n            break;\n        }\n        else {\n            System.out.println(\"The timer is counting down...\");\n            timer [3];\n        }\n    }\n}\n```\n\nDropdown choices:\n- `[1]`: `<=`, `>=`, `==`, `=>`\n- `[2]`: `!=`, `==`, `=`, `=>`\n- `[3]`: `+=`, `++`, `-`, `--`, `-=`\n\nWhich selections correctly fix the code?",
    "options": {
      "A": "[1] =>, [2] =, [3] ++",
      "B": "[1] >=, [2] ==, [3] --",
      "C": "[1] <=, [2] ==, [3] --",
      "D": "[1] >=, [2] !=, [3] -="
    },
    "answer": "B",
    "explanation": "Three bugs prevented the original code from compiling and counting down: (1) `=>` is not a valid Java relational operator; it must be `>=` (`timer >= 0`). (2) `if (timer = 0)` uses assignment instead of equality comparison and fails to compile because `0` is an `int`, not a `boolean`; it must be `==` (`timer == 0`). (3) `timer++` counts up instead of down; decrementing by 1 requires `timer--;` (`--`, whereas `-=` expects an operand on the right)."
  },
  {
    "number": 33,
    "topic": "Topic 3, Implement flow control",
    "type": "mcq",
    "question": "You are writing a Java console program.\n\nThe program must meet the following requirements:\n- Read a line of text entered by the user\n- Print each word in the text to the console on a separate line\n\n```java\njava.[1] input = new java.[2]([3]);\n\nwhile (input.[4])\n{\n    [5](input.[6]);\n}\n```\n\nDropdown choices:\n- `[1]`: `text.Format`, `util.Scanner`, `text.FieldPosition`\n- `[2]`: `text.Format`, `util.Scanner`, `text.FieldPosition`\n- `[3]`: `System.out`, `System.in`, `System.err`\n- `[4]`: `next()`, `toString()`, `hasNext()`\n- `[5]`: `text.Format`, `input.findInLine`, `System.out.println`\n- `[6]`: `next()`, `toString()`, `hasNext()`\n\nWhich selections correctly complete the code?",
    "options": {
      "A": "[1] util.Scanner, [2] text.Format, [3] System.in, [4] next(), [5] System.out.println, [6] toString()",
      "B": "[1] util.Scanner, [2] util.Scanner, [3] System.in, [4] hasNext(), [5] System.out.println, [6] next()",
      "C": "[1] util.Scanner, [2] util.Scanner, [3] System.out, [4] hasNext(), [5] System.out.println, [6] next()",
      "D": "[1] text.Format, [2] util.Scanner, [3] System.in, [4] hasNext(), [5] input.findInLine, [6] next()"
    },
    "answer": "B",
    "explanation": "`java.util.Scanner input = new java.util.Scanner(System.in);` creates a `Scanner` reading from standard input (`System.in`). By default, `Scanner` uses whitespace as its delimiter, so `while (input.hasNext())` checks whether another token (word) is available and `System.out.println(input.next());` consumes and prints each word on its own line. (Note: the source PDF's green highlights erroneously select `text.Format`, `next()`, and `toString()`.)"
  },
  {
    "number": 34,
    "topic": "Topic 3, Implement flow control",
    "type": "mcq",
    "question": "You need to evaluate the following code. Line numbers are included for reference only.\n\n```java\n01 public static void main(String[] args) {\n02   int anum = 55;\n03   for (int cnt = 0; cnt < 10; cnt++) {\n04     add(anum);\n05   }\n06   System.out.println(anum);\n07 }\n08\n09 public static void add(int anum) {\n10   anum++;\n11 }\n```\n\nEvaluate the three statements below:\n- `[1]` Which statement describes the value of `anum` at line 05?\n- `[2]` Which statement describes the value of `anum` at line 11?\n- `[3]` Which statement describes the value of `cnt` at line 06?\n\nWhich combination of statements is accurate?",
    "options": {
      "A": "[1] When cnt is 9, the value of anum is 55.  |  [2] When cnt is 7, the value of anum is 55.  |  [3] The value of cnt is 10.",
      "B": "[1] When cnt is 9, the value of anum is 55.  |  [2] When cnt is 7, the value of anum is 56.  |  [3] The variable cnt is out of scope.",
      "C": "[1] When cnt is 9, the value of anum is 64.  |  [2] When cnt is 7, the value of anum is 62.  |  [3] The variable cnt is out of scope.",
      "D": "[1] When cnt is 9, the value of anum is 65.  |  [2] When cnt is 7, the value of anum is 63.  |  [3] The value of cnt is 11."
    },
    "answer": "B",
    "explanation": "Java passes primitive arguments by value, so `add(anum)` only receives a copy of `55`. Thus in `main` at line 05, `anum` remains `55` on every iteration (including when `cnt` is `9`). Inside `add(int anum)`, line 10 (`anum++`) increments the local parameter copy from `55` to `56`, so at line 11 `anum` is `56` (including when `cnt` is `7`). Finally, because `cnt` is declared inside the `for` loop header on line 03, its scope ends at line 05, making `cnt` out of scope at line 06. (Note: the source PDF's green highlights erroneously select `55` at line 11 and `10` at line 06.)"
  },
  {
    "number": 35,
    "topic": "Topic 4, Perform object-oriented programming",
    "type": "classify",
    "question": "You work for Woodgrove Bank as a Java programmer.\n\nYou need to evaluate the following class. Line numbers are included for reference only.\n\n```java\n01 public class Account {\n02   protected int balance;\n03   public Account() {\n04     balance = 0;\n05   }\n06   public Account(int amount) {\n07     balance = amount;\n08   }\n09 }\n```\n\nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "categories": [
      "Yes",
      "No"
    ],
    "items": [
      {
        "text": "The Account class has a single constructor.",
        "category": "No"
      },
      {
        "text": "Other classes can inherit the Account class.",
        "category": "Yes"
      },
      {
        "text": "Line 07 is equivalent to this.balance = amount;",
        "category": "Yes"
      }
    ],
    "explanation": "The `Account` class defines two overloaded constructors (`Account()` on lines 03-05 and `Account(int amount)` on lines 06-08), so the first statement is No. Because `Account` is `public` and not `final` and provides `public` constructors, other classes can inherit from it (Yes). On line 07 inside `Account(int amount)`, there is no local parameter named `balance` shadowing the field `balance`, so `balance = amount;` assigns to the instance field and is equivalent to `this.balance = amount;` (Yes). (Note: the source PDF erroneously marks the third statement No.)"
  },
  {
    "number": 36,
    "topic": "Topic 4, Perform object-oriented programming",
    "type": "classify",
    "question": "You have the following code segment. Line numbers are included for reference only.\n\n```java\n01 public class Customer\n02 {\n03     private int id = 3;\n04     public static void main(String[] args)\n05     {\n06         Customer customer = new Customer();\n07         id = 5;\n08         showId();\n09     }\n10\n11     protected void showId()\n12     {\n13         System.out.println(id);\n14     }\n15 }\n```\n\nThe code does not compile.\n\nFor each of the following statements, select **Yes** if the action is required to resolve the compilation error. Otherwise, select **No**.",
    "categories": [
      "Yes",
      "No"
    ],
    "items": [
      {
        "text": "Change the access modifier of the variable id to public.",
        "category": "No"
      },
      {
        "text": "Change the access modifier of the showId method to public.",
        "category": "No"
      },
      {
        "text": "On lines 07 and 08, add the prefix customer. to id and showId().",
        "category": "Yes"
      }
    ],
    "explanation": "`main` is a `static` method inside the `Customer` class, so it cannot directly reference the non-static instance field `id` or non-static instance method `showId()` without an object reference. Prefixing them with `customer.` (`customer.id = 5;` and `customer.showId();`) resolves the compilation errors (Yes). Changing the visibility of `id` or `showId()` to `public` is neither required nor helpful because `main` is already inside `Customer` and has access to both `private` and `protected` members of `Customer` instances (No, No)."
  },
  {
    "number": 37,
    "topic": "Topic 4, Perform object-oriented programming",
    "type": "mcq",
    "question": "You have a Java class named `InsurancePolicy`.\n\nYou need to define a constant data member named `RATE`. The data member must be accessible by any class without instantiating the `InsurancePolicy` class.\n\nAvailable code segments: `final`, `finally`, `private`, `protected`, `public`, `static`, `super`, `void` (each may be used once, more than once, or not at all).\n\n```java\npublic class InsurancePolicy\n{\n    [1] [2] [3] double RATE = .0642;\n}\n```\n\nWhich code segments correctly complete `[1]`, `[2]`, and `[3]`?",
    "options": {
      "A": "[1] private, [2] static, [3] final",
      "B": "[1] public, [2] static, [3] final",
      "C": "[1] protected, [2] static, [3] final",
      "D": "[1] public, [2] static, [3] finally"
    },
    "answer": "B",
    "explanation": "To be accessible from any class in any package, the field needs `public`. To be accessed on the class directly (`InsurancePolicy.RATE`) without instantiating `InsurancePolicy`, it needs `static`. To make it a constant whose value cannot be reassigned, it needs `final` (`finally` is for `try` blocks, not field declarations)."
  },
  {
    "number": 38,
    "topic": "Topic 4, Perform object-oriented programming",
    "type": "mcq",
    "question": "You work on a team that develops e-commerce applications. A member of the team creates a class named `DB` that connects to a database. The class contains a method named `query`.\n\nYou need to instantiate the `DB` class and invoke the `query` method.\n\n```java\nDB db = [1];\n[2];\n```\n\nDropdown choices:\n- `[1]`: `DB()`, `new DB`, `new DB()`\n- `[2]`: `db.query()`, `DB.query`, `query()`\n\nWhich selections correctly complete the code?",
    "options": {
      "A": "[1] DB(), [2] DB.query",
      "B": "[1] new DB, [2] db.query()",
      "C": "[1] new DB(), [2] db.query()",
      "D": "[1] new DB(), [2] query()"
    },
    "answer": "C",
    "explanation": "Instantiating an object in Java requires the `new` keyword followed by the constructor call with parentheses: `new DB()`. Invoking the instance method `query` on the `db` reference requires dot notation and parentheses: `db.query()`. (Note: the source PDF's green highlights erroneously select `DB()` and `DB.query`.)"
  },
  {
    "number": 39,
    "topic": "Topic 4, Perform object-oriented programming",
    "type": "mcq",
    "question": "You are writing a Java class named `SavingsAccount`.\n\nThe class must meet the following requirements:\n- Inherit from an existing class named `Account`\n- Include a constructor that uses the base class constructor to initialize the starting balance\n- Include a substitute `toString()` method\n\n```java\npublic class SavingsAccount [1] Account {\n    double rate = 0.02;\n\n    SavingsAccount(double startingBalance) {\n        [2](startingBalance);\n    }\n\n    [3]\n    public String toString() {\n```\n\nDropdown choices:\n- `[1]`: `:`, `extends`, `inherits`, `implements`\n- `[2]`: `Account`, `base`, `constructor`, `super`\n- `[3]`: `@Implements`, `@Inject`, `@Overload`, `@Override`\n\nWhich selections correctly complete the code?",
    "options": {
      "A": "[1] extends, [2] base, [3] @Implements",
      "B": "[1] extends, [2] super, [3] @Override",
      "C": "[1] implements, [2] super, [3] @Override",
      "D": "[1] inherits, [2] Account, [3] @Overload"
    },
    "answer": "B",
    "explanation": "In Java, class inheritance uses `extends` (`implements` is for interfaces, `:` and `base` are C# syntax, and `inherits` is not a Java keyword). Calling the superclass constructor uses `super(startingBalance);`, and overriding an inherited method such as `toString()` is annotated with `@Override`. (Note: the source PDF's green highlights erroneously select `base` and `@Implements`.)"
  },
  {
    "number": 40,
    "topic": "Topic 5, Compile and debug code",
    "type": "mcq",
    "question": "You have the following class definition:\n\n```java\nclass Logger\n{\n    public void logError(String message)\n    {\n\n    }\n}\n```\n\nThe `logError` method can be invoked _by code in all classes in the same package as the Logger class_.\n\nReview the underlined text (\"by code in all classes in the same package as the Logger class\"). If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct.",
    "options": {
      "A": "No change is needed",
      "B": "only by the Logger class",
      "C": "only by the Logger class and classes in the same package that inherit from it",
      "D": "by all classes in all packages"
    },
    "answer": "A",
    "explanation": "Although `logError` is declared `public`, the `Logger` class itself has no access modifier (default / package-private access). Because `Logger` is only visible within its own package, classes outside that package cannot reference `Logger` directly to call `logError`, whereas every class in the same package as `Logger` can instantiate `Logger` and invoke `logError`. Therefore, the underlined statement is correct as written (No change is needed). (Note: the source PDF prints C as its key, which does not match any valid Java access rule.)"
  },
  {
    "number": 41,
    "topic": "Topic 5, Compile and debug code",
    "type": "mcq",
    "question": "You write the following Java program for Munson's Pickles and Preserves Farm. Line numbers are included for reference only.\n\n```java\n01 class Pickle {\n02     boolean isPreserved = false;\n03     private boolean isCreated = false;\n04\n05     void preserve() {\n06         isPreserved = true;\n07     }\n08\n09     public static void main(String[] args)\n10     {\n11         Pickle pickle = new pickle();\n12         isCreated = true;\n13         pickle.preserve;\n14     }\n15 }\n```\n\nYou encounter error messages when you attempt to compile the program. You need to ensure the program compiles successfully.\n\n```java\npublic static void main(String[] args)\n{\n    [1]\n    [2]\n    [3]\n}\n```\n\nDropdown choices:\n- `[1]`: `Pickle pickle = new pickle();`, `Pickle pickle = new Pickle();`, `pickle Pickle = new Pickle();`, `pickle Pickle = new pickle();`\n- `[2]`: `isCreated = true;`, `Pickle.isCreated = true;`, `pickle.isCreated = true;`\n- `[3]`: `pickle.preserve;`, `pickle.preserve();`, `Pickle.preserve;`, `Pickle.preserve();`\n\nWhich selections correctly complete lines 11, 12, and 13?",
    "options": {
      "A": "[1] pickle Pickle = new Pickle();  [2] Pickle.isCreated = true;  [3] Pickle.preserve();",
      "B": "[1] Pickle pickle = new Pickle();  [2] pickle.isCreated = true;  [3] pickle.preserve();",
      "C": "[1] Pickle pickle = new pickle();  [2] isCreated = true;  [3] pickle.preserve();",
      "D": "[1] Pickle pickle = new Pickle();  [2] Pickle.isCreated = true;  [3] pickle.preserve;"
    },
    "answer": "B",
    "explanation": "Java is case-sensitive and the class name is `Pickle`, so instantiating it requires `Pickle pickle = new Pickle();`. Because `isCreated` and `preserve()` are non-static instance members and `main` is `static`, they must be accessed through the object reference `pickle`: `pickle.isCreated = true;` (`private` allows access inside `Pickle`) and `pickle.preserve();` (method calls require parentheses `()`). (Note: the source PDF's green highlights erroneously choose `pickle Pickle = new Pickle();`, `Pickle.isCreated = true;`, and `Pickle.preserve();`.)"
  },
  {
    "number": 42,
    "topic": "Topic 5, Compile and debug code",
    "type": "classify",
    "question": "You need to evaluate the output of the following code segment. Line numbers are included for reference only.\n\n```java\n01 try\n02 {\n03     int x = 1 / 0;\n04     System.out.println(\"try\");\n05 }\n06 catch (ArithmeticException ex)\n07 {\n08     System.out.println(\"catch ArithmeticException\");\n09 }\n10 catch (Exception ex)\n11 {\n12     System.out.println(\"catch Exception\");\n13 }\n14 finally\n15 {\n16     System.out.println(\"finally\");\n17 }\n```\n\nFor each of the following outputs, select **Yes** if the output is displayed. Otherwise, select **No**.",
    "categories": [
      "Yes",
      "No"
    ],
    "items": [
      {
        "text": "try",
        "category": "No"
      },
      {
        "text": "catch ArithmeticException",
        "category": "Yes"
      },
      {
        "text": "catch Exception",
        "category": "No"
      },
      {
        "text": "finally",
        "category": "Yes"
      }
    ],
    "explanation": "On line 03, integer division `1 / 0` immediately throws an `ArithmeticException`, so execution transfers out of the `try` block before line 04 (`\"try\"` is NOT printed). The first matching catch block (`catch (ArithmeticException ex)`) handles the exception and prints `\"catch ArithmeticException\"`. Because only one catch block executes per exception, `catch (Exception ex)` is skipped (`\"catch Exception\"` is NOT printed). Finally, the `finally` block always executes and prints `\"finally\"`. (Note: the source PDF erroneously marks all four outputs Yes.)"
  }
];
