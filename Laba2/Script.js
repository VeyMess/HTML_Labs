
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
            return mas;
        case 1:
            counter++;
            return mas.sort();
        case 2:
            counter++;
            return mas.sort().reverse();
        case 3:
            counter++;
            return mas.sort(SortLength());
        default:
            break;
    }
}

function SortLength(a,b)
{
    if(a.length < b.length) return -1;
    else if(a.length>b.length) return 1;
    else if(a.length==b.length) return 0;
}

