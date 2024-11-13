import GetHourlyWeather from '@/components/commons/GetHourlyWeather';
import Header from '../components/commons/Header';
import GetDailyWeather from '@/components/commons/GetDailyWeather';
import GetMapData from '@/components/commons/GetMapData';
import GetTodayHighlight from '@/components/commons/GetTodayHighlight';
import GetWeeklyWeather from '@/components/commons/GetWeeklyWeather';

function HomePage() {
    return (
        <div className='page'>
            <div className='page__container'>
                <div>
                    <Header />
                </div>
                <div className='flex'>
                    <GetDailyWeather />
                    <GetHourlyWeather />
                    <GetMapData />
                </div>
                <div>
                    <div className='flex'>
                        <GetTodayHighlight />
                        <GetWeeklyWeather />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
