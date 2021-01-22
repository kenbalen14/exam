import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserItem from './UserItem';
import inputActions from '../redux/actions/inputActions';
import Grid from '@material-ui/core/Grid';


const UsersSection = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users)

  const [open, setOpen] = React.useState(false);

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputName(item.name));
    dispatch(inputActions.setInputEmail(item.email));
    dispatch(inputActions.setInputBody(item.body));
    //setOpen(true);
  }

  if(users?.length === 0) {
    return (
      <div >
        <p>There is no profile yet. Please add one.</p>
      </div>
    )
  }

  return (
    <div>
    <Grid container spacing={3}>
      {users?.map((item, index) => {
        if(item) {
          return (
            <UserItem
            key={index}
              id={index}
              name={item?.name}
              email={item?.email}
              body={item?.body}
              onItemClicked={() => {
                onItemClicked(item, index);

              }}
            />
          )
        }
        return null;
      })}
    </Grid>
    </div>
  );
};

export default UsersSection;
