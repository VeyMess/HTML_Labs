
var mas= new Array(5);
mas[0]="Москва";
mas[1]="Волгоград";
mas[2]="Ярославль";
mas[3]="Серпухов";
mas[4]="Подольск";
var counter=0;

function ShowSorts()
{
    switch(counter)
    {
        case 0:
            counter++;
            document.write(mas);
            break;
        case 1:
            counter++;
            document.write(mas.sort());
            break;
        case 2:
            counter++;
            document.write(mas.sort().reverse());
            break;
        case 3:
            counter++;
            document.write(mas.sort(SortLength()));
            break;
        default:
            break;
    }
}

function SortLength(a,b)
{
    if(a < b) return -1;
    else if(a>b) return 1;
    else if(a==b) return 0;
}

function FUCKYOUBITCH()
{
    document.writeln(counter);
}