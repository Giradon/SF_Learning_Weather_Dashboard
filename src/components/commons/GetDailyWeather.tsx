import { Separator } from '../ui/separator';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
export default function GetDailyWeather() {
    return (
        <div>
            <Card className='w-[300px]'>
                <CardHeader>
                    <CardTitle>Today</CardTitle>
                    <CardDescription>
                        오늘 현재 날씨를 조회하고 있습니다.
                    </CardDescription>
                </CardHeader>
                <Separator />

                <p>2024-11-03</p>
                <p>Seoul-South Korea</p>
            </Card>
        </div>
    );
}
