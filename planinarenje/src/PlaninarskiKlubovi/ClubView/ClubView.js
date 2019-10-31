import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const ClubView = () => {
  return (
    <div>
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEBITERMVFRUXEBgYFRgXFBYZEhcVFRgXFhgXFRcYICogGRsmHxcXITEhJSorLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGjcmICUwLS0tMy0yMC0rLS0tLS0tLy0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABgQFAgMHAf/EAEMQAAEDAgEFCwkHBAIDAAAAAAEAAgMEEQUGEiExQRUiM1FhcXKBkbHBBxMyQlJTgrLRFCM0YnOToZKiwuEk8GODs//EABsBAQACAwEBAAAAAAAAAAAAAAAEBgIDBQEH/8QANhEAAgEDAQQIBQQBBQEAAAAAAAECAwQRMQUGEiETFDJBUVJxgSI0YaHBFTNCU5EjsdHw8eH/2gAMAwEAAhEDEQA/APcUAQBAEBj1NayP0jZYynGOrBjbtQ+0sOmp+KPcMbtQ+0nTU/FDDG7UPtJ01PxQwxu1D7SdNT8UMMbtQ+0nTU/FDDG7UPtJ01PxQwxu1D7SdNT8UMMbtQ+0nTU/FDDG7UPtJ01PxQwxu1D7SdNT8UMMbtQ+0nTU/FDDG7UPtJ01PxQwxu1D7SdNT8UMMbtQ+0nTU/FDDG7UPtJ01PxQwxu1D7SdNT8UMMbtQ+0nTU/FDDG7UPtJ01PxQwzvpq5knom6yjOMtGMMylmeBAEAQBAEAQBAEBN4m775w/KO8qrbySaUcfX8EmhqYU9THHbPe1l9Wc4C9tdrqtU6der2E36E2MJS7McnTupT++i/cZ9VuVleeRmXQVPL9hupT++i/cZ9V71K88jHQVPL9hupT++i/cZ9U6leeRjoKnl+w3Up/fRfuM+qdSvPIx0FTy/YbqU/vov3GfVOpXnkY6Cp5fsN1Kf30X7jPqnUrzyMdBU8v2G6lP76L9xn1TqV55GOgqeX7DdSn99F+4z6p1K88jHQVPL9hupT++i/cZ9U6leeRjoKnl+w3Up/fRfuM+qdSvPIx0FTy/YbqU/vov3GfVOpXnkY6Cp5fsN1Kf30X7jPqnUrzyMdBU8v2G6lP76L9xn1TqV55GOgqeX7DdSn99F+4z6p1K88jHQVPL9hupT++i/cZ9U6leeRjoKnl+w3Up/fRfuM+qdSvPIx0FTy/Y7IKyKQ2ZIxxAuQ1wJtx6DyrVVo3FJZmmjGVKUdY4MyicRMzr8F3t3JScp5fcQ7jRFMFbiKfUAQBAEAQBAEAQE1iXDu6I7yqrvLpH3/AASbfVkP5RvRp+lJ3MW3dPHFP2LJsjtS9iJsrod8WQCyAWQCyAWQCyAWXgC9AsgFkAsgFkAsgFkAsvAVHk9/EyfoH52Ks708rWPqcna/7cfU9DpOGj+LwXH3b7c/RFTudEU4VwIp9QBAEAQBAEAQBATWJcO7ojvKq28ukff8Em31ZD+Ub0afpSdzFnunrU9iybH7cvYiVdTvBAF4AgPoCBvB8RcwF6DlG27mjjcB2my1VpcNOT8EYVHiLfgmzvxKPNnmbxTSDse4LG3nx0oy8TGhLipRf0RjLcbQjCPpFjYouYTzofEAQBAEBUeT38TJ+gfnYqxvV8rH1OVtf9uPqeh0nDR/F4Lkbt9ufoip3HZRUBXAihAEAQBAEAQBAEBNYlw7uiO8qrby6R9/wSbfVkP5RvRp+lJ3MWe6etT2LJsfty9iJV1O8EAQBeAI1kNZ5GdiUG9imHoytJPJKw5sg7RnfEoltWzOdJ6r/Z95Ftp85UnrH/buMFTCUZWFMzqiAcc8fztuol/Pgtqj+jNFzLhoyf0Zk5Tsza2pH/mJ/qAd4rRsmfFZ039DXYvNvD0NYukSzOwqnznOe4XZEwyO5SPQZ8TrDmuod5W4EoLWTS9iLdVHGKgtZcv+TCJJ0k3J0k8ZOsqXFYWCTFJLCPiHoXoCALwFR5PfxMn6B+dirG9XysfU5W1/24+p6HScNH8XguRu325+iKncdlFQFcCKEAQBAEAQBAEAQE1iXDu6I7yqtvLpH3/BJt9WQ/lG9Gn6UncxZ7p61PYsmx+3L2IlXU7wQGQ2lLoy9mnNH3g9Zo9q21nLsOvYTolXjCajPlnQ0OsozUJ8s6fU40tM+UlsbS4hpcQNea0XJW7JnVqwpLM3jng6Qhs9Ciyeg+1U1RTeu0iaHpAZrhzEWHxLgbTqdVuqdz/GXws5V5Loa8a3c+TJ1d6LUkmu86uU9DaZLMzq2mH/AJb/ANILvBc3bE+GyqP6ES/eLefp+TJy3Zaum5Qw/wBjR4KPu7PisIf4NWzHm3XuaIldxHQKPFKf7LQRREWknf5yTjDGjet6rt685V20rdcvp1V2YLC9TlUJdYupT7o8l6k4rCdU7ZaZ7Gsc5pDZGksJ1OAOaSOvwRNM1wqwm2ovmtfocxSkR+cdvWm4ZxvcNeaPZG13ULlaOnTnwR5sx6ZOfBHXv+hjqQbgvAVHk9/EyfoH52Ksb1fKx9TlbX/bj6nodJw0fxeC5G7fbn6Iqdx2UVAVwIoQBAEAQBAEAQBATWJcO7ojvKq28ukff8Em31ZD+Ub0afpSdzFnunrU9iybH7cvYiVdTvBAd9HWPheJGGzm8fokbQ4bWnaFpr0I1qbjL/voaq1KNWLjL/z0PZMjcEhiYahsRjfOxpcw+oLXzGjYLm9ubisIFBVacFCo84f2KRf3U6kujbyo/c86y9yf+x1JLBaGW7mcTT6zOrWOQ22Lo05cSLLsi96elwS7UfujW5MVvmKuF5NgXZjui/e/wbHqUDbFr1i0nBa6omX1LpKDXhzNhl1hXmKkvaLMl3w4g/1xybD1niUDd2/6xb9HJ/FHkR9mXKnSUHrE6chmXrouRrz/AGkeK27xy4bCa9DPajxbteLRkeUOO1YDxwM/gvCj7rTzZcPg2a9kvNJr6mJkhhX2mpaCLsj37+I29FvWf4BUrbt8rW1eO1LkjbtG4VKk0tXyPuWlb56sksdDAIxxb3S7+4kdS93ftnSs48S5y5sbNpcFBPx5nTkvgjq2pZELhvpSO9lg19Z1DnvsXWlLCPdo3atqTn36L6nsGO5OwVEDIzHcRaY2g5o3osGX9kjRbm4lArdJKDjB4fiU23u6lKo5J66nimKVkk0rnSDNIOaGAWbGGmwjA2W1c91JtLeNCnwrn4v6l5tqcYUlw9/PPiYilG8LwFR5PfxMn6B+dirG9XysfU5W1/24+p6HScNH8XguRu325+iKncdlFQFcCKEAQBAEAQBAEAQE1iXDu6I7yqtvLpH3/BJt9WQ/lG9Gn6UncxZ7p61PYsmx+3L2IlXU7wQFT5P8n/tlRnvH3URDncTn62s8TyW41qqywjj7YvehpcEe1L7HtNlFKYanKfBW1tO+J2g2ux3svHonwPISs4S4Xkk2lzK3qqcTweqp3xvfG8Fr2uLXDaCP+3B5lK5S5F/pVI1YqcXyZ6TLCMSw1h0eczLt5JWXaea5BHMV86hUlszakk9G+foVpN2t019fsTPk7j/5jiRbNgdr1glzBY8q7+9NVOyWNG0dPa006MceP4MnymMtPC7jhcP6XX8Vo3SmugmvBmrY8v8ATmn9DeYDSjD6B0rxZ5YZHjbe29Z1aBzkrjbRrvaW0Y049lPH/wBIN1Ud1cqK00Xp4nmoznu2uc52wElznHYBrJJX0VcNOCXcuRZcqlHnySR7VkJk99ipt+PvZLOkPFo3rOYA9pKj1JcTKPtK8dzV+i5IpiFrOeeU+VDJ/wA1IKqMbyQ2l4mybHcztXOBxqTSnywWjYd7xLoJd2hBrcWMLwFR5PfxMn6B+dirG9XysfU5W1/24+p6HScNH8XguRu325+iKncdlFQFcCKEAQBAEAQBAEAQE1iXDu6I7yqtvLpH3/BJt9WQ/lG9Gn6UncxZ7p61PYsmx+3L2IyN1jpAdyG9v4II6irlOLa5PB3JxbWE8G0w/DoapzY4nuilcbNZIM6Nx4myNFx1jrUGda4pPnHiX0IVa4rW0XKaUl4rX3R7Pk3g7KOnZC3TYXcfaedLnH/upbJS4nkpV1cyuKrqP2NqsTQfCgJPLTJWOsbnizJQLB4GzYHjaO7v5t5dVbNqvHnH+S/J1NnX87d8Oq8CJwPGXYZ5ynqo3+lnMzbHWADa9rtNr347qDtDZsdruNe3ljlzO5c26vGqtF/RmRkLN56rq5rZucAbcWe9xt/ao+8kHRsqNJ6mG0YOlRp033HZ5R966kktfNe7QdRtmOseey1bqLjhWpeKRjspcSqQ8UYmOZRfb42U1PE/Oe4FwNtTdNtB1XsSTYaOVTbDZC2dVlc3E1hZx4s2ULPqs3VrPktCryIyRZTfeyWfLbX6rTxM+us8mpb7e9q7Qqua5U1p9WcraW0p1/hXJFsF2UcU+oDFxKiZPE+KQXa9paRyHi5UTxzM6VSVOanHk0eJ41gkVFI6OaV0jxpDI25ozTfNc6R2jTbU0HavFWuKs8QjheL7/QutreVbuHFTiku9t9/0RpZXgnQ0NGwC57SSSVNjFpc2dGEXFc3kpfJ7+Jk/QPzsVa3q+Vj6nM2v+3H1PQ6Tho/i8FyN2+3P0RU7jsoqArgRQgCAIAgCAIAgCAmsS4d3RHeVVt5dI+/4JNvqyH8o3o0/Sk7mLPdPWp7Fk2P25exEq6ne7snpnktyfzW/a5G6XAiG+xnrP69Q5ByqPVnnkVTbl7xy6GD5LX1PRwtBXwgCA4vbcWWFSCnFxejCeCRypwWKaN7ZBazS5j9rdGu/eqRB3GzL5Qp6N6dzTOvZ3U4SUonmmSmNPpZCWRmQPaM9jQS7RcgiwOq57Vb9sWFO8pRjOai1pnQsu0LeFaCTlho7srMdkqnMDonRNZcta4EPJOsm4GzYFp2JsylZxk4TUm9cGGz7WNFNqWX9C6yNwiOOCIxgF8jGue/abi9uRovq8VV9o1bjaF86D5JPCX0OHf3MpVJOT0ehbwxhoACuNtbwoU1Tj3HDk8vJ2KQeBAEBG+UjJ41UHnoxeWIEgDW6PW5vKdo5rbVtpT4Xg6uyb3q9Xhl2ZHjwKlF2Kjye/iZP0D87FV96vlY+pytr/tx9T0Ok4aP4vBcjdvtz9EVO47KKgK4EUIAgCAIAgCAIAgJrEuHd0R3lVbeXSPv+CTb6sh/KN6NP0pO5iz3T7VT2LLsfty9jRZJ4Ga6pbHpzBvpSNjBsvxnUOs7Fcpy4Yk3aN2rak3/J8l/ye7QRtY1rWgBoAAA1ADQAFDKK25PLONTVRxNL5HtY0ay4gDtKGLeNSMxXygta61PHn2Olz7taR+Ua+s25islHxNUquNDb4HlfTVNmk+akPqvOgn8rtR5tB5F40ZxqJlDdYszNJlbgprKcxNe6M5wNxtaDvmkbQRfRx2WitCKXSuOXHQl2Vz1eqp4ya/DcNip2BkTA0bfaJ43HWSvm17fV69Vuq/YmVKs6j4pPJzrqKOZhZK0OadhG3jB2HlC1Wt7Wt58VOWBTqSpy4ovByyLyfdRskDpC9rnkxg6mM2DnN9NtGgL6Va8FeEbhwxNrmaL+7VeSaWmv1Ka6mHPNPjeUtPSaHuzn+wzS/r2N67L3DMJTUScovKIDIfPQ5rCdBYc5zR+YG2d1W5isuE1qtz5llh+IxVDM+J7XjkOkcjhraeQrA3Jp6GSRdD08X8oOT32Spz2C0MpJbxNfrczxHJcbFKpTysFz2Pe9NS6OXaj90cfJ9+Jk/QPzsVc3q+Wj6mW1/wBuPqeh0nDR/F4Lkbt9ufoiqXPZRUBXAihAEAQBAEAQBAEBNYlw7uiO8qrby6R9/wAEm31ZEeUO/wDxrDOOe8AWJuSGWFhpKz3U1qexYtl4XG28LBcZK4XHQUoMojjeRnTOG9aDsBLjsGjtO1WZZ0zkr9/dOvVby8LTJrMby+Yy7aVuefbcCIxzDW7+OtZKPic6VXGhDYjiM1Q7Ome552X9EdFo0DqWWMGlyb1MRemIsh6b7BcrKmmsM7zkY9R5JsPyu1j+RyLzBnGo0X+CZVU1VZodmSew+wJ6J1O6tPIsHFm9TTMjEIM05w1HXzqibw7N6KfTx0epPoVMrhZ10cGe7TqGtQti7PdzWTl2VzMq1ThjyOeMZQ09IPvH762hjdMh6tg5TYL6NGOFhHPlNIgsby1qJ7tj+5Z+U/eHnfs+G3OVsUTRKq3oTKyNR8QHdSVckLg+J7mOG1pseY8Y5DoXmD1NrQtsEy/1Nqm/+xg+Zni3sXjibo1fEpcRp6fEaZzWuZI1w3rvSDXj0SQDcEHZo2rHmTba4lRmpwZ5rkZA+OtnjkaGPbE5rmi9gQ9mq+zaOQrh7z/KR9S0384zt4Si855l5ScNH8XguVu325+iK1cdlFQFcCKEAQBAEAQBAEAQE1iXDu6I7yqtvLpH3/BJt9WTmUdS2GSnlLA9zDIYw70A8hgDnW0m2waNJvcWXm67eai9DbcXU6VNwj/LX2JnE8VnqXZ0zy7ToGpjei0aBz61bkuRxXJy5mEvTwIeBAEAQ9CAoMJytqIRmPPno9Wa874D8r9Y679SjXNtC4punLRm2FaUXk7sTyymeCyD7pm065Xc7tTerTyrTYWELSkqcWZVLiU2TTiSSSbkm5J1k8ZO1TzQz4h4EAQBAEBkUNdLA/Pie5juMbeQjURzrxoyUmnlFLgmI/aqoyvYGy/Zy17m6GvAezNJbscNXLyWsq7vJ8tFfU61pdSlDou5PJTUnDR/F4Lm7t9ufohc6IqArgRQgCAIAgCAIAgCAmsS4d3RHeVVt5dI+/4JNvqyTy21Q87/APBebr9qp7Gu+/iSqt5zFoEAQBAEAQBAEAQBAEAQBAEAQBD03+RnDv8A0T8zFXN5fl4+pNsu2/QtKTho/i8Fzd2+3L0Jd1oioCuBECAIAgCAIAgCAICaxLh3dEd5VW3l0j7/AIJNvqyTy21Q87/8F5uv2qnsa77+JKq3nMWgQBAEAQBAEAQBAEAQBAEAQBAEBv8AIzh3/on5mKuby/Lx9SbY9t+haUnDR/F4Lm7t9uXoTLoqArgRAgCAIAgCAIAgCAmsS4d3RHeVVt5dI+/4JNvqyTy21Q87/wDBebr9qp7Gu+/iSqt5zFoEAQBAEAQBAEAQBAEAQBAEAQBAb/Izh3/on5mKuby/Lx9SbY9t+haUnDR/F4Lm7t9uXoTLoqArgRAgCAIAgCAIAgCAmsS4d3RHeVVt5dI+/wCCTb6sk8ttUPO//Bebr9qp7Gu+/iSqt5zFoEAQBAEAQBAEAQBAEAQBAEAQBAb/ACM4d/6J+Zirm8vy8fUm2PbfoWlJw0fxeC5u7fbl6Ey6KgK4EQIAgCAIAgCAIAgJrEuHd0R3lVbeXSPv+CTb6sk8ttUPO/8AwXm6/aqexrvv4kqrecxaBAEAQBAEAQBAEAQBAEAQBAEAQG/yM4d/6J+Zirm8vy8fUm2PbfoWlJw0fxeC5u7fbl6Ey6KgK4EQIAgCAIAgCAIAgJrEuHd0R3lVbeXSPv8Agk2+rNTitDHMG+cF7XtpI124uYLgWV5Vt89G8ZJfQQq8prQ1kuD0rQXOAaBrJkcANmkkrpx2zezliPN/RHjsaC5tHQ2koCbB8ZP64v8AMtv6jtFc8P8AwY9Ut/8ArO9uD0pvYA2JDrPcbEawdOg8i1va98sZ7/oe9SoeAjwelcA5oDgdRD3EHmIK8nti8g8SZ6rGg+4+S4RSstnANubDOkIueIXOtex2tez7LyeOxoLVHM4HTjWy3xu+qwW2bzOEz3qNHwOMWD0rxdgDhsLZHEcWsFZy2vexlwvUKxoPRCLCKV4uwBw42yEjtBXk9r3sHiXI8VjQeiDMGpSSA0Eg2NnuNjxHToK9e175Yz36DqNDwOp2H0QaHFzA03sTNZptoNjnWNlmtp7Qbwk/8HnU7df+nODC6SS+ZmvtrzZS61+Ox0LGptW+p9rkeqyoPRHJuD0pcWgAuFs4CQ5wvquL3C8lte+iuJ6eg6lQ0wcnYJTAEltgNZL3WHPpWMds3sniLz7HrsaK7jopqGhlJEbmPI1hs2cR1By2z2ntCC4pcvYxVnbvQ7Rg1LctzRnAXIz3ZwB1Ei61vbF6o8TfI96jQzjAbg1KSQACRa4D3XF9IuL6Lo9sXiSk3yZ71Gh4GfheHRRPLmNsS23pE6Lg7TyKDe7Qr3EFGb5J5PerU6XxRRt6Tho/i8F092+3P0I1zySKcK4EQ+oAgCAIAgCAIAgJrEuHd0R3lVbeXSPv+CTb6swqrZ1+CqtM6NLVk7ll+Bm54/8A6xrq7L+YXo/9jGv2OZwyshYIGkNaP+TDqaAeEHEpFhVqSrSUn3MxrQUYLBpftBdPUUzi5kUuIP8AOyC4BDmtDYQ4eiX5hBPERxroSpJU41Vzko8l+TQpPicfFlrHGGtDWgBoAAA0AAaAAOJVmrKUpOUtWdBR4VhGgyypRMymjJtn1bW34s5kguuvsiahOcn3IjXKykjokxJ89JFDqnmk+zycbSzRO7+kE/GFuhbRpXDqvsr4kYdI3BR7zGoaww4W0MJD3yyRR2BJBdI8F1m6TmtBdo4lsq0VVvuJ6JJv/BhCWKOPHJl5PyxQVL4Is4RSRh8edG9lpIwGyAB4F7gNdo0LTtCnKrRVWWq5PHh3Gyi1CfCjXy1R+0VMBLo45a0CWUXsGujAEYd6peWkX2DnUqFGPQwq6tR5I1OT43HxZtcbjEc+HtZGHBrpg2MZoFhDYAZxDRbXp4lCs5SqU60pyw3jn4G6riLikjZCrEUUkskXmWsaXEXjJcGgnR5snm08ahul0tSMIz4sm1SxFvGDQ08L6Y09XJodK8iq4gJyDHzBhzQunOca8ZW8f4rl7GhJwxN95sMWiE1ZBBLpi80+TMPoySMIADhtDQc6yiWr6O1nUh2s49EbKmJVEpaHZlNRR/ZnyABj4mF8T2gBzHMFwARsOq2rSsLG4nKsoy5qXJpntanFQyuRhUVVJ9re8Que51FTlwa5jc0nOPrkbSVLrUIdXUXLGJM1QbU28dxkYI9zqyuLmFhtT3aS0kbxw1tJHL1qPexjG3pKLyuZtpNupLJSU2vqXHnoZ1dDMpOGj6/BWDdrtz9Dn3WhUBXAiBAEAQBAEAQBAEBNYlw7uiO8qrby6R9/wSbfVmFVbOtVWnqdGk1lmsxahFRC6Jzi0OzdItfeua/b0VMtq7oVFUS8fuZzipLDGJ0LahgY4kDzjH3Gu7HBwGnmWdvcujNzS1WDyUFJYbOjcaIsqGPu5s8rpHA+qXBo3vNmgg8a3O+nxQlH+Kx6mCoxw039TMpIixjWueXkC2c62c6211tqiV5qpNyisZNsFwxxk6q+hExhJJHm5myC1tJaCLHk3y2UK7oqSSzxLBjKCljLOiDB42VT6kXznNtb1QSGhzhykNF+vjW6V9OVGNLwMVRipuaZ1YfgTIXRHPc7zQkzAQLZ0ri5ztG2xzRyLOttCVSEopYzj/C7jGNFJ6mZiFCJjES4tdHKHtcLXuLgtN9hBsVHoXLpcSxlSWMGycFI6RhEZFQ193tneXPB1C7Q2zbdEG/Gtrvp5g4rHDy9TDoY88951SYMSKf79+fBnZry1hcc5uZvgRYnN0Xty61nG+jFz+DlLuDpclz5o+VuDvmj83JUvLc4E/dxC+abgGzdIuAbJSvadKXFCn9NTyVKUl2xWYRJNG6OSpe5rhZw81ALjqboXtO9pU5qcKeGtObDpNrHEZEmGB8bGSPe5zDdkos2VrhqIIFr20G4IO261dclGo5RXJ6ruM+iTik3zRxlwvzmaJ5XyNBBzLMaxxGkF4YAXadNr5vIvVdqGeigk338zzo89p5O6OiDZ5Jrm742MI0WAYSQR2rVO4lOiqT7nnPqZKCTznuFPQhk00oJJlzLjRYebaWi3PdeVbhzpRp+U9jBKTl4mwptfUoc9DGroZtJw0fxeCsW7fbn6HPutEVAVvIgQBAEAQBAEAQBATmKstMSdRAAVa3ipTnCLis4z+CRbtJmBVQZ7bZzmnYW2uOo6Cqtb1lRnmUVJeDJby1yZNYlHWQXJeXM9poFh0hbe93Krvs97JvElwJS8GyDVqXMOfFlGu3Vn94exv0Xa/RLHyEfrlfzDdWf3h7G/Re/odl/WOuVvMN1Z/eHsb9E/Q7L+sdcreYbqz+8PY36J+h2X9Y65W8w3Vn94exv0T9Dsv6x1yt5hurP7w9jfon6HZf1jrlbzDdWf3h7G/RP0Oy/rHXK3mG6s/vD2N+ifodl/WOuVvMN1Z/eHsb9E/Q7L+sdcreYbqz+8PY36J+h2X9Y65W8w3Vn94exv0T9Dsv6x1yt5hurP7w9jfon6HZf1jrlbzDdWf3h7G/RP0Oy/rHXK/mG6s/vD2N+ifodl/X9x1yv5jOw4Vk+lryG+04AN6tG+6lyL9bIs18UU34I3U6tzP8AkU1FSmMb57nu2k2HYBqHaeVUi8uqdaX+nDhidCKmliTyZ1AwmZltgN+uy727lKScpNcmiNctYwUoVsIp9QBAEAQBAEAQBAdNRTNkFnC68ayDS1WFPZpZvhxHX1FcS+2HSr5lTWJG6FeUdTCa7ZqO0HWqlc2Va1l8a90S4zjLQ0+JZPxyXdHaN3IN4ecbOcdhXa2bvJXtsRrfFH7oj1rSM+a5MmK2hkhNpG24jraeYq+We0qF3Hipy/5OdOlKDwzGU3JqC9AQBAEAQBAEAQBeZGTKoaCSY2jbfjJ0NHOfDWufe7Tt7SOaj9u82woynoU2HZPRx2Mn3juUbwczdvX2KjbS3mr18xorhj9zo0rOMObNu54GjsA19QXDt7SvdT+BZ+rJLlGCMylw2STS7eN/u7ditdlsGFHEqvN/YiTrt6G5pKNkYs0LvRiorCRo11MlZAIAgCAIAgCAIAgCA+WXjWQYlZhzJNYsdhGtY1KcKixJZPU2tDS1NHJFrGc3jGsc42qsX2wF27f/AASKdfHaMZ7WvaQQHNOsEXHWCq6lXtKmecWiTiM1juJ/EsmvWgPwOPyuPce1W7Zu9WkLru70QK1n3wJyaJzHFrgWkawRYq5Ua8K0eKm8ogyi4vDOC3GIQBAEAQBeg7qWmfK7NjaXHk1DnOodai3N5RtoudWWP9zOFNyeEUmHZNNbYzHOPsi+YOc6z/HWqTtHeqpPMLbkvF6nQo2aXOTN4A1gAFgBoAAsOYAKsRhXu55WZSJfwwRk01FJLszW8Z9LqGxWOx3fjHE6z5+BHnX8puaPDWR6hc7SdastOlCmuGCwiO3l5ZmALNLB4fV6AgCAIAgCAIAgCAIAgCAID4RdAaytwhrt83eu5PFRbmzpXEcVFkyjNx0NRNG+M2eLfmHo/wClU7/YVWjmdLmiXCunryMaso45m2kaHDYdo5jrC5tpfXFlPNN+qehnUpQqLmTOJZOyR3dHeRvF646vW6uxXrZu81Cv8Fb4ZfY51WznDmuaNIrPFprKZD5+AXoC9Bziic8hrQXE6gBcrTWr0qMeOpLC+p6ouTwkUGHZMnQZzb8jTp+J307VTtpb1JJxtl7k+jZd8iihiZG2zQGtGwaB/sqoVate8qZlmUvoTlGMFhHfT08kvoiw9o+AXcstgTl8dbTw7zTO4X8TcUWFMZpO+dxlWihbU6EOGmsEZyb1NgBZbsGJ9XoCAIAgCAIAgCAIAgCAIAgCAIAgCA4SRBwsRdAaerwe2mI2/Ls/0uXebKoXK5rEvE2wqyia0kg2cM08R8DtVRvdk17V5ayvoSo1oyMDEsHin0kZr/abr+Iet16eVbtm7dubR4TyvBmFW3hPmS2IYPLCdLc5t9DmgkcxGsFX2w27a3cdeF+DOdVtpwM3Dsm3vsZTmN9kWzz4N/k8i5m0d6aVH4aC4n49xtpWcpc5aFLSUkcLbRtDRtO09InSVSbm9ubyeZvP0OhThCmuRkQsdIbMF+U+j/tdGx2DVq/FU5L7mE66jobWkwdo0v3x/gcwVrtrGjbLEERJTlLU2jWgalMMTkgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDHqqRkgs4XXjSaw0NDS1WGPj0t3zeI+kOYrg3+wqVbMqfJm+nXceTMRr78+0bQqnc2de3liaJcZqWgZdxswZx/gc5U2z2LWr85fCjXOtGJs6XB72Mpvyer2K22ezKFuspZfiyLOrKRt44w0WAsuiazmgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAUBiz0EbzctWE6cZ9pDJ2wQNYLNFlkgdq9AQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB//9k="
            alt="Card image cap"
            height="400px"
          />
          <CardBody>
            <CardTitle>Планинарски Клуб Македон</CardTitle>
            <CardText style={{ textAlign: "center" }}>
              Ова е официјален вебсајт на Планинарскиот клуб Македон од Скопје,
              Македонија. Основачкото собрание на клубот е одржано на 02.04.2008
              год. во салата за состаноци на општина Карпош. Целта на клубот е
              омасовување на планинарството посебно со млади членови, и
              создавање на комплетно планинарски образовани членови, без разлика
              дали се занимаваат рекреативно со планинарски спортови или активно
              со намера да постигнат врвни резултати. Структурата на членови е
              различна, од искусни алпинисти и планинари до млади членови со
              мало искуство. Просечната старост на членовите на клубот е 31
              годинa. Наш најистакнат член е Слободан Јованоски - Боби, член на
              Македонските Хималајски експедиции од 80-тите години. Во
              изминатите шест години постоење, членовите на ПК Македон имаат
              реализирано и поголем број на искачувања надвор од границите на
              Македонија и тоа: Мон Блан во неколку наврати, Елбрус на Кавказ,
              Матерхорн, Аконкагва, Ајланд Пик, Ленин Пик и други. За
              планинарското образование на своите членови, ПК Македон има
              формирано посебна комисија која организира предавања и теренски
              вежби, и тоа предавања после секој втор состанок на клубот, и
              теренски вежби соодветно со теоретските предавања. Зачленувањата
              во клубот се прават на редовните состаноци. Членарината за 2017
              година изнесува 350,00 денари и потребно е да се уплати на
              клубската жиро-сметка на Тутунска Банка: 210063535500109
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ClubView;
