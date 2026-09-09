--Project LMS SQL .
/* =========================
   ========== DDL ==========
   ========================= */
create database Library_MS;

CREATE TABLE Member (
    Member_ID INT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE,
    FirstName VARCHAR(50) not null,
    MiddleName VARCHAR(50) not null,
    LastName VARCHAR(50) not null,
    City VARCHAR(50) not null,
    StreetNumber VARCHAR(50) not null,
    ZipCode VARCHAR(20) not null
);

CREATE TABLE PhoneMember (
    Member_ID INT,
    Phone VARCHAR(20),
    PRIMARY KEY (Member_ID, Phone),
    FOREIGN KEY (Member_ID) REFERENCES Member(Member_ID)
);

CREATE TABLE Category (
    Category_ID INT PRIMARY KEY ,
    CategoryName VARCHAR(100) NOT NULL
);

CREATE TABLE Book (
    Book_ID INT PRIMARY KEY,
    Title VARCHAR(200) NOT NULL,
    Author VARCHAR(150) NOT NULL,
    Publisher VARCHAR(150),
    [Status] VARCHAR(50),
    Age_Group VARCHAR(50),
    Category_ID INT,
    CONSTRAINT FK_Book_Category FOREIGN KEY (Category_ID) 
        REFERENCES Category(Category_ID)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

CREATE TABLE Warehouse (
    warehouse_ID INT PRIMARY KEY,
    warehouseLocation VARCHAR(100) not null ,
    warehousename VARCHAR(50) not null
);  

CREATE TABLE Branch (
    Branch_ID INT PRIMARY KEY,
    BranchName VARCHAR(50) not null ,
    BranchLocation VARCHAR(100) not null,
    warehouse_ID INT ,
    FOREIGN KEY (warehouse_ID) REFERENCES Warehouse(warehouse_ID)
);


CREATE TABLE BorrowBook (
    Book_ID INT ,
    Member_ID INT,
    BorrowDate DATE not null,
    DueDate DATE not null ,
    FineAmount DECIMAL(6,2) DEFAULT 0,
    Price DECIMAL(6,2) not null ,
    PRIMARY KEY (Book_ID, Member_ID),
    FOREIGN KEY (Book_ID) REFERENCES Book(Book_ID),
    FOREIGN KEY (Member_ID) REFERENCES Member(Member_ID)
);

CREATE TABLE BranchStock (
    Book_ID INT ,
    Branch_ID INT ,
    quantityBorrowed INT DEFAULT 0,
    quantityAvailable INT  not null,
    PRIMARY KEY (Book_ID, Branch_ID),
    FOREIGN KEY (Book_ID) REFERENCES Book(Book_ID),
    FOREIGN KEY (Branch_ID) REFERENCES Branch(Branch_ID)
);


CREATE TABLE Staff (
    employee_ID INT PRIMARY KEY,

    Manager_ID INT NULL,

    Phone VARCHAR(15) NOT NULL UNIQUE,
    Email VARCHAR(25) NOT NULL UNIQUE,

    NetSalary DECIMAL(8,2) NOT NULL,

    firstname VARCHAR(50) NOT NULL,
    middlename VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,

    Branch_ID INT NULL,
    warehouse_ID INT NULL,


    FOREIGN KEY (Manager_ID) REFERENCES Staff(employee_ID),
    FOREIGN KEY (Branch_ID) REFERENCES Branch(Branch_ID),
    FOREIGN KEY (warehouse_ID) REFERENCES Warehouse(warehouse_ID),

    
    CHECK (
        (Branch_ID IS NOT NULL AND warehouse_ID IS NULL)
     OR (Branch_ID IS NULL AND warehouse_ID IS NOT NULL)
    )
);



/* =========================
   ========== DML ==========
   ========================= */


INSERT INTO Category VALUES
(1, 'Programming'),
(2, 'Databases'),
(3, 'AI'),
(4, 'Networking'),
(5, 'Business');

INSERT INTO Warehouse VALUES
(1, 'Cairo - Nasr City', 'Main Warehouse'),
(2, 'Giza - Dokki', 'Secondary Warehouse');


INSERT INTO Branch VALUES
(1, 'Nasr City Branch', 'Nasr City', 1),
(2, 'Dokki Branch', 'Dokki', 2),
(3, 'Maadi Branch', 'Maadi', 1);


INSERT INTO Member VALUES
(1, 'ahmed@gmail.com', 'Ahmed', 'Ali', 'Hassan', 'Cairo', '12', '11511'),
(2, 'sara@gmail.com', 'Sara', 'Mohamed', 'Ali', 'Giza', '45', '12611'),
(3, 'omar@gmail.com', 'Omar', 'Ibrahim', 'Saleh', 'Alex', '7', '21500'),
(4, 'lina@gmail.com', 'Lina', 'Youssef', 'Kamal', 'Cairo', '23', '11728'),
(5, 'mahmoud@gmail.com', 'Mahmoud', 'Sayed', 'Fathy', 'Giza', '9', '12411');


INSERT INTO PhoneMember VALUES
(1, '01011111111'),
(1, '01122222222'),
(2, '01233333333'),
(3, '01544444444'),
(4, '01055555555');



INSERT INTO Book VALUES
(1, 'C Programming', 'Dennis Ritchie', 'Pearson', 'Available', 'Adult', 1),
(2, 'SQL Fundamentals', 'John Smith', 'O''Reilly', 'Available', 'Adult', 2),
(3, 'AI Basics', 'Andrew Ng', 'MIT Press', 'Available', 'Adult', 3),
(4, 'Networking 101', 'James Kurose', 'McGraw-Hill', 'Borrowed', 'Adult', 4),
(5, 'Business Strategy', 'Michael Porter', 'Harvard', 'Available', 'Adult', 5),
(6, 'Python for Beginners', 'Eric Matthes', 'No Starch', 'Available', 'Teen', 1);



INSERT INTO BranchStock VALUES
(1, 1, 2, 8),
(2, 1, 1, 5),
(3, 2, 0, 6),
(4, 2, 3, 2),
(5, 3, 1, 4),
(6, 3, 0, 7);



INSERT INTO BorrowBook VALUES
(4, 1, '2025-01-01', '2025-01-15', 0, 250),
(2, 2, '2025-01-05', '2025-01-20', 10, 300),
(1, 3, '2025-01-10', '2025-01-25', 0, 200),
(3, 4, '2025-01-12', '2025-01-27', 5, 400);



INSERT INTO Staff VALUES
-- Managers
(1, NULL, '2010111567', 'Seif.2004@hi.com', 6000, 'Ali', 'Hassan', 'Mahmoud', 1, NULL),
(2, NULL, '2010222222', 'Ahmed.2005@hi.com', 6500, 'Mona', 'Ahmed', 'Salem', 2, NULL),
(3, NULL, '2011778987', 'Omar.2005@hi.com', 7000, 'Youssef', 'Kamal', 'Ali', 3, NULL),

-- Staff under Manager 1
(4, 1, '201098221221', 'Moustafa.2005@hi.com', 5000, 'Nour', 'Ibrahim', 'Fathy', 1, NULL),
(5, 1, '2010333333', 'Mariam.2004@hi.com', 5200, 'Hany', 'Mostafa', 'Saad', 1, NULL),

-- Staff under Manager 2
(6, 2, '01011111111', 'ali.staff@hi.com', 4800, 'Ali', 'Ahmed', 'Youssef', 2, NULL),
(7, 2, '01022222222', 'sara.staff@hi.com', 4900, 'Sara', 'Mohamed', 'Hassan', 2, NULL),

-- Staff under Manager 3
(8, 3, '01033333333', 'omar.staff@hi.com', 4700, 'Omar', 'Ibrahim', 'Saleh', 3, NULL),
(9, 3, '01044444444', 'lina.staff@hi.com', 5100, 'Lina', 'Youssef', 'Kamal', NULL, 1),
(10,3, '01055555555', 'mahmoud.staff@hi.com', 5300, 'Mahmoud', 'Sayed', 'Fathy', NULL, 2);



