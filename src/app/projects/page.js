export default function index(){
    return(
        <div>
            <h1>Projects</h1>
            
            <h2>NHS Pathfinder</h2>
            <p>The Northern General is a large site in Sheffield with multiple buildings 
                entrances and floors making it a very difficult place for patients and new 
                staff to navigate. Our team of 6 was tasked with creating a solution to this 
                problem with a navigation app that was accessible and easy for everyone to use. 
                <br/><br/>
                We decided on developing a web ap rather han a local app as it woulld be 
                easier for patients to access without needing to downloadan app. We also chose 
                to build the web app in ASP.Net MVC to ensure it would be easy to intergrate into 
                the NHS system..
                <br/><br/>
                The core of the app is a custom path finding engine. We modeled the hospial's 
                hallways and rooms as a node graph with edges representing the paths between locations. 
                We then used an algotithm to determine the sortest path between two locations. 
                <br/><br/>
                The path was shown to the user via image format with text directions. We 
                decided to use images over GPS or videos because of the NHS's spotty WIFI 
                and the fct that each user can walk at their own pace with pictures whereas 
                they cant with videos.
                <br/><br/>
            </p>

            <h2>Ilet4You CRM</h2>
            <p>Describe the Project</p>

            <h2>Task Managment App</h2>
            <p>
                I created a personal task management app to help with my organization and
                productivity through visual means. Built using WPF (Windows Presentation Foundation)
                and C# the app uses a backlog with MoSCoW prioritization and difficulty estimates 
                to cotorize tasks and help users manage their tasks. The core of the app is a calendar 
                view that visually show sthe user their productivity in a day. Sinilar to the Github 
                contribution tracker the greener a day is the more tasks and more dificult tasks 
                the user has copleted.
            </p>
        </div>
    );
}