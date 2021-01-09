import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Grid, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import projectsContent from './ProjectsContent';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
}));

export default function ProjectsList() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing = {4}>
                    {projectsContent.map((project) => (
                        <Grid item key={project} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent className={classes.classContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.title}
                                    </Typography>
                                    <Typography>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" variant="contained" color="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                                        More Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )
}