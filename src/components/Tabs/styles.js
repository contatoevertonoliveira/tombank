import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    contentContainerStyle: { paddingleft: 10, paddingRight: 20},
    showsHorizontal
})
