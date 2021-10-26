import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ClassCard = ({ classTitle, classDescription }) => {

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {classTitle}
        </Typography>
        <Typography variant="body2">
          {classDescription}
          <br />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ClassCard
