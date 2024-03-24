INSERT INTO department (name) VALUES
    ('Engineering'),
    ('Sales'),
    ('Marketing'),
    ('Finance');

INSERT INTO role (title, salary, department_id) VALUES
    ('Software Engineer', 80000, 1),
    ('Sales Manager', 100000, 2),
    ('Marketing Coordinator', 60000, 3),
    ('Financial Analyst', 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Alexandros', 'Mograine', 1, NULL),
    ('Thane', 'Korth''azz', 2, 1),
    ('Lady', 'Blaumeux', 3, 2),
    ('Sir', 'Zeliek', 4, 3);
