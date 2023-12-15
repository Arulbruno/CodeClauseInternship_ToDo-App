import './Container.css'; 
export const Container = ({children}) => {
    return (
        <div className="container p-4 p-md-5">
        <div className="col-md-6 offset-md-3 col-12 text-center">
          {children}
        </div>
      </div>
      
    
    
    );
}