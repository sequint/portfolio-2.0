import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

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
