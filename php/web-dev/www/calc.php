<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP Calculator</title>
</head>
<body>
    <form action="calc.php" method="get">
        <input type="text" name="num1" placeholder="Number 1">
        <input type="text" name="num2" placeholder="Number 2">
        <select name="operator">
            <option value="add">Addition</option>
            <option value="sub">Substraction</option>
            <option value="mul">Multiplication</option>
            <option value="div">Divition</option>
            <option value="mod">Modulus</option>
        </select>
        <input type="submit" name="calc" value="Calculate">
    </form>
    <hr>
    <h1>
        <?php
            if(isset($_GET['calc'])) {
                if(is_numeric($_GET['num1']) and is_numeric($_GET['num2'])) {
                    switch($_GET['operator']) {
                        case 'add':
                            echo "Result: " . ($_GET['num1'] + $_GET['num2']);
                            break;
                        case 'sub':
                            echo "Result: " . ($_GET['num1'] - $_GET['num2']);
                            break;
                        case 'mul':
                            echo "Result: " . ($_GET['num1'] * $_GET['num2']);
                            break;
                        case 'div':
                            echo "Result: " . ($_GET['num1'] / $_GET['num2']);
                            break;
                        case 'mod':
                            echo "Result: " . ($_GET['num1'] % $_GET['num2']);
                            break;
                        default:
                            echo "Invalid Option!!!";
                    }
                } else {
                    echo "Invalid Data, the numbers must be provided!";
                }
            }
        ?> 
    </h1>
</body>
</html>