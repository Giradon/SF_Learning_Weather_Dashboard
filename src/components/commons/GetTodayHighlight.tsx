import { Card, CardHeader, CardDescription, CardTitle } from '../ui/card';

export default function GetTodayHighlight() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Today's Highlights</CardTitle>
                <CardDescription>
                    오늘의 날씨 중 주의깊게 살펴보아야할 이벤트를 조회하고
                    있습니다.
                </CardDescription>
            </CardHeader>
            <div>
                <div className='flex'>
                    <div>
                        <Card>
                            <CardTitle>해상 및 조수 데이터</CardTitle>
                            <CardDescription>Marine and Sailng</CardDescription>
                        </Card>
                    </div>
                    <div className='flex justify'>
                        <Card>
                            <CardTitle>습도</CardTitle>
                            <CardDescription>Humidity</CardDescription>
                        </Card>
                        <Card>
                            <CardTitle>기압</CardTitle>
                            <CardDescription>Pressure</CardDescription>
                        </Card>
                    </div>
                </div>
                <Card>
                    <CardTitle>일출/일몰</CardTitle>
                    <CardDescription>Sunrise & Sunset</CardDescription>
                </Card>
                <div className='flex justify'>
                    <Card>
                        <CardTitle>가시거리</CardTitle>
                        <CardDescription>Visiablity</CardDescription>
                    </Card>
                    <Card>
                        <CardTitle>체감온도</CardTitle>
                        <CardDescription>Feels Like</CardDescription>
                    </Card>
                </div>
            </div>
        </Card>
    );
}
