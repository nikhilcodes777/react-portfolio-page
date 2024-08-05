const Button = ({ children, isglow }) => {
  const classes = `rounded-lg font-medium px-3 py-1 border-2 border-primary ${isglow ? "bg-primary text-ctp-base hover:glow-less" : "bg-ctp-base hover:bg-primary hover:text-ctp-base hover:glow-less"}`;
  return (
    <button className={classes} >
      {children}
    </button >
  )
}

export default Button
