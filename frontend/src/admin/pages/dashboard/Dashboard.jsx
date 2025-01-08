import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import { green, blue, red, orange } from "@mui/material/colors";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Dashboard = () => {
  // Dummy statistics
  const stats = [
    {
      title: "Total Sales",
      value: "$50,000",
      icon: <MonetizationOnIcon fontSize="large" />,
      color: green[500],
    },
    {
      title: "New Customers",
      value: "120",
      icon: <GroupIcon fontSize="large" />,
      color: blue[500],
    },
    {
      title: "Orders",
      value: "350",
      icon: <ShoppingCartIcon fontSize="large" />,
      color: orange[500],
    },
    {
      title: "Revenue Growth",
      value: "12%",
      icon: <TrendingUpIcon fontSize="large" />,
      color: red[500],
    },
  ];

  // Revenue graph data (Example data for daily, monthly, and yearly)
  const data = [
    { name: "Day 1", revenue: 100 },
    { name: "Day 2", revenue: 200 },
    { name: "Day 3", revenue: 150 },
    { name: "Day 4", revenue: 300 },
    { name: "Day 5", revenue: 250 },
    { name: "Day 6", revenue: 400 },
    { name: "Day 7", revenue: 350 },
  ];

  // To-Do List
  const [tasks, setTasks] = useState([
    { id: "1", content: "Complete Dashboard", status: "ongoing" },
    { id: "2", content: "Update User Profile", status: "completed" },
    { id: "3", content: "Fix Bugs", status: "ongoing" },
  ]);
  const [taskContent, setTaskContent] = useState("");

  const handleTaskChange = (e) => setTaskContent(e.target.value);

  const addTask = () => {
    if (taskContent.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), content: taskContent, status: "ongoing" },
      ]);
      setTaskContent("");
    }
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    const newTasks = Array.from(tasks);
    const [removed] = newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, removed);
    setTasks(newTasks);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ marginBottom: "20px" }}
      >
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Avatar sx={{ bgcolor: stat.color, width: 56, height: 56 }}>
                    {stat.icon}
                  </Avatar>
                  <Box textAlign="right">
                    <Typography variant="h5">{stat.value}</Typography>
                    <Typography variant="subtitle1">{stat.title}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Revenue Graph */}
      <Box mt={5}>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Revenue Overview
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke={blue[500]} />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Box>

      {/* To-Do List */}
      <Box mt={5}>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            To-Do List
          </Typography>
          <TextField
            label="Add Task"
            fullWidth
            value={taskContent}
            onChange={handleTaskChange}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={addTask}>
            Add Task
          </Button>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Grid container spacing={2} mt={3}>
              <Grid item xs={6}>
                <Typography variant="h6">Ongoing</Typography>
                <Droppable droppableId="ongoing">
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{ maxHeight: 200, overflowY: "auto" }}
                    >
                      {tasks
                        .filter((task) => task.status === "ongoing")
                        .map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided) => (
                              <Box
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                sx={{
                                  padding: "10px",
                                  marginBottom: "10px",
                                  backgroundColor: "#f5f5f5",
                                  borderRadius: "8px",
                                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                }}
                              >
                                {task.content}
                              </Box>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Completed</Typography>
                <Droppable droppableId="completed">
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{ maxHeight: 200, overflowY: "auto" }}
                    >
                      {tasks
                        .filter((task) => task.status === "completed")
                        .map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided) => (
                              <Box
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                sx={{
                                  padding: "10px",
                                  marginBottom: "10px",
                                  backgroundColor: "#e0e0e0",
                                  borderRadius: "8px",
                                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                }}
                              >
                                {task.content}
                              </Box>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Grid>
            </Grid>
          </DragDropContext>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
