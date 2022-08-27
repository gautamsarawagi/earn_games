import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { fetchfaqs } from "../../redux/faqs/actions";
import { useDispatch, useSelector } from "react-redux";
function Faq() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.faqReducer);
  console.log(data);

  useEffect(() => {
    dispatch(fetchfaqs());
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1% 0" }}
      >
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ fontWeigh: "550" }}
        >
          FREQUENTLY ASKED QUESTION
        </Typography>
      </div>

      <div>
        {data.map((item, index) => {
          return (
            <div key={index} style={{ marginBottom: "2%" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeigh: "550",my: 2, px: 3  }}
              >
                {item.question}
              </Typography>

              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{ px: 3, texyAlign: "justify" }}
              >
                {item.answer}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
