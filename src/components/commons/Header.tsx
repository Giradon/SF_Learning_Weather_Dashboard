import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function Header() {
    return (
        <header>
            <div className='flex justify-normal'>
                <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1>Weather.io</h1>
                <Input
                    type='search'
                    placeholder='검색할 지역 이름을 입력해주세요.'
                />
            </div>
        </header>
    );
}

export default Header;
