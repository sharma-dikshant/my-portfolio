// eslint-disable-next-line
export default function Button({ type="none", color = "#9B3922",value="none", OnClick=null, children }) {
    const styles = {
        textDecoration: "none",     
      padding: "10px 20px",
      backgroundColor: `${color}`,
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    };
    return <button  value={value} type={type} style={styles} onClick={OnClick}>{children}</button>;
  }
  