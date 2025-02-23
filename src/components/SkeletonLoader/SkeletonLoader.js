import { Skeleton } from '@mui/material';

const SkeletonLoader = () => {
  return (
    <div className="product-grid">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div key={i} className="product-card">
          <Skeleton variant="rectangular" width={250} height={200} />
          <Skeleton variant="text" width={200} />
          <Skeleton variant="text" width={150} />
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;