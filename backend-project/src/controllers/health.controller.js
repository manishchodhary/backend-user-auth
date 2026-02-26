export const healthCheck = (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "backend runnig fine",
  });
};
