import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  InputBase,
  Modal,
  Paper,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";

import { FiUploadCloud } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
// import CustomAccordion from "../../ui/CustomAccordion";
import FormInput from "../../ui/FormInput";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormSelect from "../../ui/FormSelect1";
import { Done } from "@mui/icons-material";
import FormSwitch from "../../ui/FormSwitch";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "860px",
  border: (theme) => `1px solid
   ${theme.palette.color.border}`,
  borderRadius: "12px",
  background: (theme) => theme.palette.color.bg,
};

const StyledInput = styled(InputBase)(({ theme }) => ({
  border: 0,
  outline: "none",
  backgroundColor: "transparent",
  // color: "inherit",
  fontSize: "11.5px",
  fontWeight: 500,

  "& input": {
    "&::placeholder": {
      color: theme.palette.color.secondary,
      fontSize: "22px",
      fontWeight: 500,
    },
    fontSize: "24px",
    fontWeight: 500,
    color: theme.palette.color.primary,
  },
}));

const AddNewAnswer = ({ open, handleClose }) => {
  const [selected, setSelected] = React.useState(0);
  const [values, setValues] = React.useState({
    title: "",
    language: "en",
    question: "",
    answer: "",
    audience: [],
    answerLive: true,
  });

  const handleChange = (field, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const items = [
    {
      title: "Choose your language",
      field: "language",
      children: (
        <FormSelect
          label="Language"
          options={[
            { value: "en", label: "English" },
            { value: "es", label: "Spanish" },
            { value: "fr", label: "French" },
          ]}
          spacing="8px"
          fullWidth
          value={values.language}
          onChange={(e) => handleChange("language", e.target.value)}
        />
      ),
    },
    {
      title: "Choose your Question",
      children: (
        <FormInput
          label="Question"
          placeholder="Enter your question here"
          fullWidth
          spacing="8px"
          value={values.question}
          onChange={(e) => handleChange("question", e.target.value)}
        />
      ),
    },
    {
      title: "Create your answer",
      children: (
        <FormInput
          label="Answer"
          placeholder="Enter your answer here"
          fullWidth
          spacing="8px"
          value={values.answer}
          onChange={(e) => handleChange("answer", e.target.value)}
        />
      ),
    },
    {
      title: "Choose your audience",
      children: (
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {["Engineer", "Customer", "Admin", "Manager"].map((audience) => (
            <Typography
              onClick={() => {
                if (values.audience.includes(audience)) {
                  setValues((prevValues) => ({
                    ...prevValues,
                    audience: prevValues.audience.filter(
                      (item) => item !== audience
                    ),
                  }));
                } else {
                  setValues((prevValues) => ({
                    ...prevValues,
                    audience: [...prevValues.audience, audience],
                  }));
                }
              }}
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.color.secondary,
                padding: "5px 7px",
                border: "1px solid transparent",
                cursor: "pointer",

                fontWeight: 500,
                ...(values.audience.includes(audience) && {
                  background: (theme) => alpha(theme.palette.color.blue, 0.15),
                  border: (theme) => `1px solid ${theme.palette.color.blue}`,
                  color: (theme) => theme.palette.color.blue,
                  borderRadius: "4px",
                }),
              }}
            >
              {audience}
            </Typography>
          ))}
        </Stack>
      ),
    },
    {
      title: "Set your answer live",
      children: (
        <FormSwitch
          checked={values.answerLive}
          onChange={(e) => handleChange("answerLive", e.target.checked)}
        />
      ),
    },
  ];
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={style}>
        <Box
          sx={{
            p: "24px",
          }}
        >
          <Stack
            spacing={1.5}
            sx={{
              overflowY: "auto",
              maxHeight: "531px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                pr: "24px",
              }}
            >
              <StyledInput
                placeholder="Enter title here"
                sx={{
                  color: (theme) => theme.palette.color.secondary,
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  color: (theme) => theme.palette.color.secondary,
                  background: (theme) => theme.palette.color.bg4,
                  borderRadius: "8px",
                  padding: "6px 8px",
                }}
              >
                Draft
              </Typography>
            </Stack>
            <Divider />
            <Stack spacing="2px">
              {items.map((item, index) => (
                <Box
                  sx={{
                    borderRadius: "8px",
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  <Stack spacing={1} alignItems="center">
                    <Box
                      sx={{
                        height: "20px",
                        borderLeft: (theme) =>
                          `1px dashed ${
                            theme.palette.color[
                              selected >= index ? "green" : "secondary"
                            ]
                          }`,
                        opacity: index === 0 ? 0 : 1,
                      }}
                    ></Box>
                    <Box
                      sx={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: (theme) =>
                          theme.palette.color[
                            selected > index
                              ? "green"
                              : selected === index
                              ? "buttonbg"
                              : "secondary"
                          ],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Done
                        sx={{
                          fontSize: "14px",
                          color: (theme) => theme.palette.color.bg,
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        height: "100%",
                        borderLeft: (theme) =>
                          `1px dashed ${
                            theme.palette.color[
                              selected > index ? "green" : "secondary"
                            ]
                          }`,
                      }}
                    ></Box>
                  </Stack>
                  <Box
                    sx={{
                      pb: "24px",
                      width: "100%",
                      pr: "24px",
                    }}
                  >
                    <CustomAccordion
                      title={item.title}
                      value={selected === index}
                      setValue={() => setSelected(index)}
                    >
                      {item.children}
                    </CustomAccordion>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={2}
          sx={{
            p: "12px",
            background: (theme) => theme.palette.color.bg4,
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: (theme) => alpha(theme.palette.color.secondary, 0.15),
              color: (theme) => theme.palette.color.primary,
              boxShadow: "none",
              ":hover": {
                background: (theme) =>
                  alpha(theme.palette.color.secondary, 0.15),
                boxShadow: "none",
              },
              width: "140px",
              borderRadius: "8px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              width: "140px",
              borderRadius: "8px",
            }}
          >
            Save and Close
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

const CustomAccordion = ({ title, children, value, setValue }) => {
  return (
    <Accordion
      expanded={value}
      onChange={() => setValue()}
      sx={{
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "24px",
        background: (theme) => theme.palette.color.bg3,
        margin: "0px 0 0 0 !important",
        "& .MuiAccordionSummary-root": {
          background: (theme) => theme.palette.color.bg3,
          minHeight: 0,
          borderRadius: "6px",
        },
        "& .Mui-expanded": {
          margin: "0px !important",
          minHeight: "0 !important",
        },
        "& .MuiPaper-root": {
          margin: "0px !important",
        },
        ":before": { display: "none" },
        width: "100%",
      }}
    >
      <AccordionSummary
        sx={{
          minHeight: 0,
          "& .MuiAccordionSummary-content": {
            margin: 0,
            lineHeight: "24px",
            padding: "12px 0px",
            color: (theme) => theme.palette.color.primary,
          },

          borderRadius: "12px",

          "& span": {
            color: (theme) => theme.palette.color.secondary,
          },
          "& .Mui-expanded": {
            borderBottom: `1px solid ${alpha("#647DB5", 0.17)}`,
          },
        }}
        expandIcon={
          <ExpandMore
            sx={{
              color: (theme) => theme.palette.color.blue,
              fontSize: "24px",
            }}
          />
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails sx={{ m: "0 !important", p: "12px !important" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default AddNewAnswer;
