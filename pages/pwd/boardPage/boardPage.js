import React from "react";
import AppBar from "@/components/pwd/reportSearchPage/appbar";
import Post from "@/components/pwd/boardPage/post";
//import SearchBar from "@/components/npwd/mapPage/searchBar"

// 멈춤 없는거
import BottomBar from "@/components/pwd/reportSearchPage/bottomBar";

// 멈춤 있는거  
// import BottomBar from "@/components/pwd/signalPage/bottomBar";




export default function PutLocation(){

    const style={
        postPart:{
            backgroundColor:'black',
            padding: '5% 0 5% 0'
        },
        
        title:{
            height: '16vh',
            width: '86%',
            backgroundColor: '#FCFF59',
            color: 'black',
            fontSize: '30px',
            fontWeight: '700',
            padding: '10% 7% 5% 7%',
        },
        
        searchingB:{
            width: '90%',
            height: '20px',
            padding: '17px',
            fontSize: '20px',
            fontWeight: '700',
            borderRadius: '20px',
            border: 'none',
            margin: '4% 0 2% 0',
            backgroundColor: 'black',
            color: 'white'
        },
        searchIcons:{
            position: 'absolute',
            right: '40px',
            marginTop:'30px',
            width: '23px',
            height: '23px',
        },
        searchbarCon:{
            display: 'flex'
        },
        titleIcon:{
            width: '28px',
            height: '28px',
            margin: '0 2% 0 0',
        }

    }
    return (
      <>
        <AppBar></AppBar>
        <div>
          <div style={style.title}>
            <img src="/icons/speechbubble_black.svg" style={style.titleIcon} />
            게시판
            <br />
            <div style={style.searchbarCon}>
              <input style={style.searchingB} />
              <img src="/icons/search_white.svg" style={style.searchIcons} />
            </div>
          </div>
        </div>
        <div style={style.postPart}>
          <Post
            text="글1"
            id="바닐라"
            time="10분전"
            type="sound"
            count={1}
            picurl="/img/haerin.jpeg"></Post>
          <Post
            text="글이 존나 길다면?? 글이 존나 길다면?? 글이 존나 길다면?? 글이 존나 길다면?? 글이 존나 길다면?? 글이 존나 길다면?? 글이 존나 길다면?? 글이 존나 길다면?? 글이 존나 길다면?? 글이 존나 길다면??"
            id="스펀지송"
            time="12분전"
            type="text"
            count={22}
            picurl=""></Post>
          <Post
            text="글3"
            id="유미"
            time="14분전"
            type="text"
            count={18}
            picurl=""></Post>
          <Post
            text="글4"
            id="팜하니"
            time="50분전"
            type="text"
            count={5}
            picurl=""></Post>
        </div>
        <div style={{height:'5vh' , backgroundColor: 'black'}}/>
        <BottomBar></BottomBar>
      </>
    );        
}