import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card';

export default function GetHourlyWeather() {
    return (
        <div>
            <Card className='w-[500px]'>
                <CardHeader>
                    <CardTitle>Hourly</CardTitle>
                    <CardDescription>
                        오늘의 시간대별 날씨를 조회하고 있습니다.
                    </CardDescription>
                </CardHeader>
                <CardFooter className='flex justify-between'>
                    <Card className='w-[150px]'>
                        <CardTitle>오전 1시</CardTitle>
                    </Card>
                    <Card className='w-[150px]'>
                        <CardTitle>오전 3시</CardTitle>
                    </Card>
                    <Card className='w-[150px]'>
                        <CardTitle>오전 5시</CardTitle>
                    </Card>
                    <Card className='w-[150px]'>
                        <CardTitle>오전 7시</CardTitle>
                    </Card>
                    <Card className='w-[150px]'>
                        <CardTitle>오전 9시</CardTitle>
                    </Card>
                </CardFooter>
            </Card>
        </div>
    );
}
