import { useEffect, useState } from "react";
import { FormEvent } from 'react';
import "./App.css";
import "./dark.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import MiddleCont from "./components/MiddleCont";
import About from "./components/About";
import PrivetInfo from "./components/PrivetInfo";
interface UserData {
  login: string;
  name: string;
 bio: string;
 avatar_url: string;
 repos_url:string
 location:string
 twitter_username:string
 followers:string
 following:string
 public_repos:string
 company:string
 created_at:string
 url:string
 message:string
blog:string
}
function App() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState<UserData>({} as UserData);;
  
  const onSubmitHandler = (e:FormEvent) => {
    e.preventDefault();
     fetch(`https://api.github.com/users/${userName}`)
       .then((response) => {
         return response.json();
      }).then((originalData: UserData) => {
         if (originalData) {
          setData(originalData);
        }
     })
 }
  console.log(data);
  
 

  const {avatar_url,bio,company,followers,following,name,location,twitter_username,public_repos,url ,created_at,blog }= data

const date = new Date(created_at)
const options: Intl.DateTimeFormatOptions = {year: 'numeric',month:'short' , day:'numeric'}
const formatedDate = date.toLocaleDateString('en-us',options);
const [month,day,year] = formatedDate.split(" ")
const result = `Joined ${day} ${month} ${year}`
console.log(result);

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme("dark")
    }else {
      setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme' , theme)
    document.body.className = theme
  },[theme])
  return (
    <div className="container" >
     <Header theme={theme} toggleTheme={toggleTheme}/>
     <SearchBar onSubmitHandler={onSubmitHandler} setUserName={setUserName}/>
      {/**main card */}
      <main>
        <div className="main-cont">
         <Info avatar_url={avatar_url} name={name} created_at={created_at} company={company} result={result}/>
         <About bio={bio}/>
           <MiddleCont public_repos={public_repos} followers={followers} following={following}/>
          <PrivetInfo location={location} url={url} blog={blog} twitter_username={twitter_username} company={company}/>
        </div>
        
      </main>
    </div>
  );
}

export default App;
