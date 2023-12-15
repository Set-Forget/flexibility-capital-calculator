export default function LoadingIcon() {
    return(
        <div className="flex flex-col justify-center items-center content-center">
            <div className="relative">
                <svg className="logo-size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                <title>Set&amp;amp;forget_logo</title>
                    <path className="logo-border"
                    id="motionPath"
                    d="M465.87,872H282.28A107.35,107.35,0,0,1,174.86,764.58v-.86A107.33,107.33,0,0,1,282.28,656.3H506.85V573.23H282.52A107.35,107.35,0,0,1,175.10,465.81v-2A107.38,107.38,0,0,1,282.52,356.41H506.85v-41A107.38,107.38,0,0,1,614.28,208H797.51a107.42,107.42,0,1,1,0,214.84H573.29v84H797.72A107.35,107.35,0,0,1,905.14,614.22v1.09A107.36,107.36,0,0,1,797.72,722.73H573.29v41.85A107.38,107.38,0,0,1,465.87,872ZM282.28,722.73a41,41,0,0,0-41,41v.86a41,41,0,0,0,41,41H465.87a41,41,0,0,0,41-41V722.73Zm291-66.43H797.72a41,41,0,0,0,41-41v-1.09a41,41,0,0,0-41-41H573.29ZM282.52,422.84a41,41,0,0,0-41,41v2a41,41,0,0,0,41,41H506.85v-84Zm290.77-66.43H797.51a41,41,0,0,0,0-82H614.28a41,41,0,0,0-41,41Z" />
                </svg>
                <div className="absolute top-0">
                    <div className="logo-bg logo-size relative">
                        <svg id="loadingWave" xmlns="http://www.w3.org/2000/svg" className="absolute" width="100%" viewBox="0 0 800 320">
                            <path d="M0,270 C50,220 150,320 200,270 C250,220 350,320 400,270 C450,220 550,320 600,270 C650,220 750,320 800,270 L800,320 L0,320 Z">
                            <animate 
                                attributeName="d"
                                fillOpacity="1"
                                from="M0,270 C50,220 150,320 200,270 C250,220 350,320 400,270 C450,220 550,320 600,270 C650,220 750,320 800,270 L800,320 L0,320 Z"
                                to="M-100,270 C-50,220 50,320 100,270 C150,220 250,320 300,270 C350,220 450,320 500,270 C550,220 650,320 700,270 C750,220 850,320 900,270 L900,320 L0,320 Z"
                                begin="0s" dur="2s" repeatCount="indefinite" />
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <span className="animate-pulse" >Loading . . .</span>
        </div>
    )
  }