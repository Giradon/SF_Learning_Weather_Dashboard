import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card';

export default function GetWeeklyWeather() {
    return (
        <div>
            <Card className='w-[500px]'>
                <CardHeader>
                    <CardTitle>7 Days</CardTitle>
                    <CardDescription>
                        이번주 날씨를 조회하고 있습니다.
                    </CardDescription>
                </CardHeader>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className='font-medium'>
                                INV001
                            </TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className='text-right'>
                                $250.00
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
